/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteRole
// ====================================================

export interface deleteRole_role {
  __typename: "Role";
  id: string;
}

export interface deleteRole {
  role: deleteRole_role | null;
}

export interface deleteRoleVariables {
  roleId: string;
}
