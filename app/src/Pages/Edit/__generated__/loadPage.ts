/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: loadPage
// ====================================================

export interface loadPage_page_canView {
  __typename: "Role";
  slug: string;
}

export interface loadPage_page_canEdit {
  __typename: "Role";
  slug: string;
}

export interface loadPage_page {
  __typename: "Page";
  id: string;
  slug: string;
  title: string;
  content: string | null;
  canView: loadPage_page_canView[];
  canEdit: loadPage_page_canEdit[];
}

export interface loadPage {
  page: loadPage_page | null;
}

export interface loadPageVariables {
  slug: string;
}
