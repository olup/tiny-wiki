/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settingsAddUSers
// ====================================================

export interface settingsAddUSers_createOneUser {
  __typename: "User";
  id: string;
  email: string;
}

export interface settingsAddUSers {
  createOneUser: settingsAddUSers_createOneUser;
}

export interface settingsAddUSersVariables {
  email: string;
}
