/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PageCreateInput, PageUpdateInput } from "./../../__generated__/graphql-global-types";

// ====================================================
// GraphQL mutation operation: savePage
// ====================================================

export interface savePage_upsertOnePage {
  __typename: "Page";
  id: string;
  slug: string;
  content: string | null;
  title: string;
}

export interface savePage {
  upsertOnePage: savePage_upsertOnePage;
}

export interface savePageVariables {
  slug: string;
  dataCreate: PageCreateInput;
  dataUpdate: PageUpdateInput;
}
