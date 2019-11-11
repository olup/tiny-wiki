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
import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "Components/MarkdownRenderer";
import PageContainer from "Components/PageContainer";

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

const PageListItem = styled.div`
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 10px;
  &:hover {
    border-color: #ccc;
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
    <PageContainer>
      <h1>Search : {search}</h1>
      {pages.map(page => (
        <Link to={`/page/${page.slug}`}>
          <PageListItem>
            <h2>{page.title}</h2>
            <MarkdownRenderer>
              <ReactMarkdown
                source={
                  (page.content && page.content.split("\n")[0].slice(0, 100)) +
                    "..." || undefined
                }
                renderers={{
                  link: args => {
                    const href = args.href.replace("@", "/page/");
                    return <Link to={href}>{args.children}</Link>;
                  }
                }}
              />
            </MarkdownRenderer>
          </PageListItem>
        </Link>
      ))}
    </PageContainer>
  );
};
