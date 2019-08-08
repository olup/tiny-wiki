/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deletePage
// ====================================================

export interface deletePage_deleteOnePage {
  __typename: "Page";
  id: string;
}

export interface deletePage {
  deleteOnePage: deletePage_deleteOnePage | null;
}

export interface deletePageVariables {
  id: string;
}
