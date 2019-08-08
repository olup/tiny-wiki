/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteUser
// ====================================================

export interface deleteUser_user {
  __typename: "User";
  id: string;
}

export interface deleteUser {
  user: deleteUser_user | null;
}

export interface deleteUserVariables {
  userId: string;
}
