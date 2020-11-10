/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const publishEquipmentNotification = /* GraphQL */ `
  mutation PublishEquipmentNotification(
    $notification: Equipment_Notification_Input
  ) {
    publishEquipmentNotification(notification: $notification) {
      id
      action
      launchType
    }
  }
`;
export const publishEquipmentConfirmation = /* GraphQL */ `
  mutation PublishEquipmentConfirmation(
    $confirmation: Equipment_Confirmation_Input
  ) {
    publishEquipmentConfirmation(confirmation: $confirmation) {
      id
      equipmentName
    }
  }
`;
export const triggerWorkout = /* GraphQL */ `
  mutation TriggerWorkout($trigger: Trigger_Input) {
    triggerWorkout(trigger: $trigger) {
      id
      action
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
      type
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
      type
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
      type
      createdAt
      updatedAt
    }
  }
`;
export const createStation = /* GraphQL */ `
  mutation CreateStation(
    $input: CreateStationInput!
    $condition: ModelStationConditionInput
  ) {
    createStation(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateStation = /* GraphQL */ `
  mutation UpdateStation(
    $input: UpdateStationInput!
    $condition: ModelStationConditionInput
  ) {
    updateStation(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteStation = /* GraphQL */ `
  mutation DeleteStation(
    $input: DeleteStationInput!
    $condition: ModelStationConditionInput
  ) {
    deleteStation(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
