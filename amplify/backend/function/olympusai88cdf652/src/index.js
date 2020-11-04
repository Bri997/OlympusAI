const axios = require('axios')
const PublishResultMutation = `mutation PublishResult(
    $id: ID!,
    $status: String,
    $listings: String
  ) {
    publishResult(result: {id: $id, status: $status, listings: $listings}) {
      id
      status
      listings
    }
  }`;

const executeMutation = async(id) => {
  console.log(id)
  const mutation = {
    query: PublishResultMutation,
    operationName: 'PublishResult',
    variables: {
      id: id,
      status: 'COMPLETE',
      listings:  "foo"
    },
  };

  try {
    let response = await axios({
      method: 'POST',
      url: 'https://aayhx72euzckbfgkcotknc3lmm.appsync-api.us-east-1.amazonaws.com/graphql',
      data: JSON.stringify(mutation),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'da2-covrpl6b6ffhzdqjmlpoddrvgu',
      }
    });
    console.log("ok")
    console.log(response.data);
    console.log("ok1")
  } catch (error) {
    console.error(`[ERROR] ${error.response.status} - ${error.response.data}`);
    throw error;
  }
};

exports.handler = async(event) => {
  //// unique identifier of query is passed as event.name
  await executeMutation(event.name)
  return { message: `finished` }
}