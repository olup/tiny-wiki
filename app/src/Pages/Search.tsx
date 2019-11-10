import React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router";
import gql from "graphql-tag";
import {
  searchPageSearchPages,
  searchPageSearchPagesVariables
} from "./__generated__/searchPageSearchPages";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";

const SEARCH_PAGES = gql`
  query searchPageSearchPages($search: String!) {
    pages(
      where: {
        OR: [
          { content: { contains: $search } }
          { title: { contains: $search } }
        ]
      }
    ) {
      id
      title
      slug
      content
    }
  }
`;

export default () => {
  const match = useRouteMatch<{ searchString: string }>({
    path: "/search/:searchString"
  });
  const search = (match && match.params.searchString) || "";
  const { data } = useQuery<
    searchPageSearchPages,
    searchPageSearchPagesVariables
  >(SEARCH_PAGES, {
    variables: { search }
  });
  const pages = (data && data.pages) || [];
  return (
    <div style={{ maxWidth: 768, margin: "0 auto" }}>
      <h1>Search : {search}</h1>
      {pages.map(page => (
        <Link to={`/page/${page.slug}`}>
          <h2>{page.title}</h2>
        </Link>
      ))}
    </div>
  );
};
