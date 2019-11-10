/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchPageSearchPages
// ====================================================

export interface searchPageSearchPages_pages {
  __typename: "Page";
  id: string;
  title: string;
  slug: string;
  content: string | null;
}

export interface searchPageSearchPages {
  pages: searchPageSearchPages_pages[];
}

export interface searchPageSearchPagesVariables {
  search: string;
}
