/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserCreateInput } from "./../../../__generated__/graphql-global-types";

// ====================================================
// GraphQL mutation operation: addUser
// ====================================================

export interface addUser_user_roles {
  __typename: "Role";
  id: string;
  slug: string;
}

export interface addUser_user {
  __typename: "User";
  id: string;
  email: string;
  roles: addUser_user_roles[] | null;
}

export interface addUser {
  user: addUser_user;
}

export interface addUserVariables {
  user: UserCreateInput;
}
