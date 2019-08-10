/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserUpdateInput } from "./../../../__generated__/graphql-global-types";

// ====================================================
// GraphQL mutation operation: updateUser
// ====================================================

export interface updateUser_updateOneUser_roles {
  __typename: "Role";
  slug: string;
}

export interface updateUser_updateOneUser {
  __typename: "User";
  id: string;
  roles: updateUser_updateOneUser_roles[] | null;
}

export interface updateUser {
  updateOneUser: updateUser_updateOneUser | null;
}

export interface updateUserVariables {
  id: string;
  userData: UserUpdateInput;
}
