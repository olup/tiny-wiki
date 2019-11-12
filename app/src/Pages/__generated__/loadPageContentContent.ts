/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: loadPageContentContent
// ====================================================

export interface loadPageContentContent_page_draftOwner {
  __typename: "User";
  id: string;
}

export interface loadPageContentContent_page_canEdit {
  __typename: "Role";
  slug: string;
}

export interface loadPageContentContent_page {
  __typename: "Page";
  id: string;
  title: string;
  content: string | null;
  updatedAt: any;
  draftOwner: loadPageContentContent_page_draftOwner | null;
  canEdit: loadPageContentContent_page_canEdit[];
}

export interface loadPageContentContent {
  page: loadPageContentContent_page | null;
}

export interface loadPageContentContentVariables {
  slug: string;
}
