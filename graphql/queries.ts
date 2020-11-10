/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const stationConfigurations = /* GraphQL */ `
  query StationConfigurations($StationID: String!) {
    stationConfigurations(StationID: $StationID) {
      id
      status
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
export const getStation = /* GraphQL */ `
  query GetStation($id: ID!) {
    getStation(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listStations = /* GraphQL */ `
  query ListStations(
    $filter: ModelStationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStations(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
