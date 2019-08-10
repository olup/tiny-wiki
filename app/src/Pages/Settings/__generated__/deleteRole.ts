/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteRole
// ====================================================

export interface deleteRole_role {
  __typename: "Role";
  slug: string;
}

export interface deleteRole {
  role: deleteRole_role | null;
}

export interface deleteRoleVariables {
  roleSlug: string;
}
