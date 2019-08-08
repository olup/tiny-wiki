import React from "react";
import styled from "styled-components";
import { H1, Button } from "@blueprintjs/core";
import gql from "graphql-tag";
import { match } from "react-router";

import ReactMarkdown from "react-markdown";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import {
  loadPageContentContent,
  loadPageContentContentVariables
} from "./__generated__/loadPageContentContent";

const StyledMd = styled(ReactMarkdown)`
  line-height: 1.8;
  p {
    margin: 10px 0;
  }
`;

type PageProps = {
  match: match<{ slug: string }>;
};

const LOAD_PAGE = gql`
  query loadPageContentContent($slug: String!) {
    findOnePage(where: { slug: $slug }) {
      title
      content
    }
  }
`;

const TopBar = styled.div`
  margin-bottom: 20px;
`;

const Content = styled.div`
  .title {
    font-size: 50px;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 20px;
  }
  code {
    display: block;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-sizing: border-box;
  }
`;

export default ({ match }: PageProps) => {
  const { data } = useQuery<
    loadPageContentContent,
    loadPageContentContentVariables
  >(LOAD_PAGE, {
    variables: { slug: match.params.slug }
  });
  const page = data && data.findOnePage;
  if (!page) return null;
  return (
    <div style={{ maxWidth: 768, margin: "0 auto" }}>
      <TopBar>
        <Link to={`/page/${match.params.slug}/edit`}>
          <Button icon="edit" minimal>
            Editer
          </Button>
        </Link>
      </TopBar>
      <Content>
        <h1 className="title">{page.title}</h1>
        <StyledMd source={page.content || ""} />
      </Content>
    </div>
  );
};
