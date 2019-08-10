/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUsers
// ====================================================

export interface getUsers_users_roles {
  __typename: "Role";
  slug: string;
}

export interface getUsers_users {
  __typename: "User";
  id: string;
  email: string;
  roles: getUsers_users_roles[] | null;
}

export interface getUsers {
  users: getUsers_users[] | null;
}
