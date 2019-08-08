/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPagesSideBar
// ====================================================

export interface getPagesSideBar_findManyPage {
  __typename: "Page";
  title: string;
  slug: string;
}

export interface getPagesSideBar {
  findManyPage: getPagesSideBar_findManyPage[] | null;
}
