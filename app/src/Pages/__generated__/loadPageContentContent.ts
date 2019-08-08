/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: loadPageContentContent
// ====================================================

export interface loadPageContentContent_findOnePage {
  __typename: "Page";
  title: string;
  content: string | null;
}

export interface loadPageContentContent {
  findOnePage: loadPageContentContent_findOnePage | null;
}

export interface loadPageContentContentVariables {
  slug: string;
}
