/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPages
// ====================================================

export interface getPages_listPages {
  __typename: "Page";
  id: string;
  title: string;
  content: string | null;
  slug: string;
}

export interface getPages {
  listPages: getPages_listPages[];
}
