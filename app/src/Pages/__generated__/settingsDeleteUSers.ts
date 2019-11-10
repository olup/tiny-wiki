/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settingsDeleteUSers
// ====================================================

export interface settingsDeleteUSers_deleteOneUser {
  __typename: "User";
  id: string;
}

export interface settingsDeleteUSers {
  deleteOneUser: settingsDeleteUSers_deleteOneUser | null;
}

export interface settingsDeleteUSersVariables {
  email: string;
}
