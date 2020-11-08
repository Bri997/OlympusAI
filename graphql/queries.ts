/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const search = /* GraphQL */ `
  query Search($text: String!) {
    search(text: $text) {
      id
      status
      listings
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCamera = /* GraphQL */ `
  query GetCamera($id: ID!) {
    getCamera(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listCameras = /* GraphQL */ `
  query ListCameras(
    $filter: ModelCameraFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCameras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEquipment = /* GraphQL */ `
  query GetEquipment($id: ID!) {
    getEquipment(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listEquipments = /* GraphQL */ `
  query ListEquipments(
    $filter: ModelEquipmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
