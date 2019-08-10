/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { RoleCreateInput } from "./../../../__generated__/graphql-global-types";

// ====================================================
// GraphQL mutation operation: addRole
// ====================================================

export interface addRole_role {
  __typename: "Role";
  slug: string;
}

export interface addRole {
  role: addRole_role;
}

export interface addRoleVariables {
  role: RoleCreateInput;
}
