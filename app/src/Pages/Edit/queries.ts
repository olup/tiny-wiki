import gql from "graphql-tag";

export const SAVE_PAGE = gql`
  mutation savePage(
    $slug: String!
    $dataCreate: PageCreateInput!
    $dataUpdate: PageUpdateInput!
  ) {
    upsertOnePage(
      where: { slug: $slug }
      create: $dataCreate
      update: $dataUpdate
    ) {
      id
      slug
      content
      title
    }
  }
`;

export const GET_PAGES = gql`
  query getPages {
    listPages {
      id
      title
      content
      slug
    }
  }
`;

export const DELETE_PAGE = gql`
  mutation deletePage($id: ID!) {
    deleteOnePage(where: { id: $id }) {
      id
    }
  }
`;

export const LOAD_PAGE = gql`
  query loadPage($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      title
      content
      canView {
        slug
      }
      canEdit {
        slug
      }
    }
  }
`;

export const GET_ROLES = gql`
  query findManyRole {
    roles {
      slug
    }
  }
`;
