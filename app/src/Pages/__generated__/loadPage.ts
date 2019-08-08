/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: loadPage
// ====================================================

export interface loadPage_findOnePage_canView {
  __typename: "Role";
  slug: string;
  id: string;
}

export interface loadPage_findOnePage_canEdit {
  __typename: "Role";
  slug: string;
  id: string;
}

export interface loadPage_findOnePage {
  __typename: "Page";
  id: string;
  slug: string;
  title: string;
  content: string | null;
  canView: loadPage_findOnePage_canView[] | null;
  canEdit: loadPage_findOnePage_canEdit[] | null;
}

export interface loadPage {
  findOnePage: loadPage_findOnePage | null;
}

export interface loadPageVariables {
  slug: string;
}
