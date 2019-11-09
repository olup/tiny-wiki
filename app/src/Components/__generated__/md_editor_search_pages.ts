/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: md_editor_search_pages
// ====================================================

export interface md_editor_search_pages_pages {
  __typename: "Page";
  title: string;
  slug: string;
}

export interface md_editor_search_pages {
  pages: md_editor_search_pages_pages[];
}

export interface md_editor_search_pagesVariables {
  search: string;
}
