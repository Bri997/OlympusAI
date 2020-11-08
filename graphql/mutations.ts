/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const publishResult = /* GraphQL */ `
  mutation PublishResult($result: ResultInput) {
    publishResult(result: $result) {
      id
      status
      listings
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createCamera = /* GraphQL */ `
  mutation CreateCamera(
    $input: CreateCameraInput!
    $condition: ModelCameraConditionInput
  ) {
    createCamera(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateCamera = /* GraphQL */ `
  mutation UpdateCamera(
    $input: UpdateCameraInput!
    $condition: ModelCameraConditionInput
  ) {
    updateCamera(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteCamera = /* GraphQL */ `
  mutation DeleteCamera(
    $input: DeleteCameraInput!
    $condition: ModelCameraConditionInput
  ) {
    deleteCamera(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createEquipment = /* GraphQL */ `
  mutation CreateEquipment(
    $input: CreateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    createEquipment(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateEquipment = /* GraphQL */ `
  mutation UpdateEquipment(
    $input: UpdateEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    updateEquipment(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteEquipment = /* GraphQL */ `
  mutation DeleteEquipment(
    $input: DeleteEquipmentInput!
    $condition: ModelEquipmentConditionInput
  ) {
    deleteEquipment(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
