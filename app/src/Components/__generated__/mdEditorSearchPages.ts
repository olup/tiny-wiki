/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: mdEditorSearchPages
// ====================================================

export interface mdEditorSearchPages_pages {
  __typename: "Page";
  title: string;
  slug: string;
}

export interface mdEditorSearchPages {
  pages: mdEditorSearchPages_pages[];
}

export interface mdEditorSearchPagesVariables {
  search: string;
}
