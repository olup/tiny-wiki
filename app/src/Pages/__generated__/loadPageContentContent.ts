/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: loadPageContentContent
// ====================================================

export interface loadPageContentContent_findOnePage_draftOwner {
  __typename: "User";
  id: string;
}

export interface loadPageContentContent_findOnePage_canEdit {
  __typename: "Role";
  slug: string;
}

export interface loadPageContentContent_findOnePage {
  __typename: "Page";
  title: string;
  content: string | null;
  draftOwner: loadPageContentContent_findOnePage_draftOwner | null;
  canEdit: loadPageContentContent_findOnePage_canEdit[] | null;
}

export interface loadPageContentContent {
  findOnePage: loadPageContentContent_findOnePage | null;
}

export interface loadPageContentContentVariables {
  slug: string;
}
