/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onEquipmentNotification = /* GraphQL */ `
  subscription OnEquipmentNotification($id: ID!) {
    onEquipmentNotification(id: $id) {
      id
      action
      launchType
    }
  }
`;
export const onEquipmentConfirmation = /* GraphQL */ `
  subscription OnEquipmentConfirmation($id: ID!) {
    onEquipmentConfirmation(id: $id) {
      id
      equipmentName
    }
  }
`;
export const onTriggerWorkout = /* GraphQL */ `
  subscription OnTriggerWorkout($id: ID!) {
    onTrigger_Workout(id: $id) {
      id
      action
    }
  }
`;
export const onCreateCamera = /* GraphQL */ `
  subscription OnCreateCamera {
    onCreateCamera {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCamera = /* GraphQL */ `
  subscription OnUpdateCamera {
    onUpdateCamera {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCamera = /* GraphQL */ `
  subscription OnDeleteCamera {
    onDeleteCamera {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEquipment = /* GraphQL */ `
  subscription OnCreateEquipment {
    onCreateEquipment {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEquipment = /* GraphQL */ `
  subscription OnUpdateEquipment {
    onUpdateEquipment {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEquipment = /* GraphQL */ `
  subscription OnDeleteEquipment {
    onDeleteEquipment {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStation = /* GraphQL */ `
  subscription OnCreateStation {
    onCreateStation {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStation = /* GraphQL */ `
  subscription OnUpdateStation {
    onUpdateStation {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStation = /* GraphQL */ `
  subscription OnDeleteStation {
    onDeleteStation {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
