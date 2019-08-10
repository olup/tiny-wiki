import React from "react";
import styled from "styled-components";
import { H1, Button } from "@blueprintjs/core";
import gql from "graphql-tag";
import { match } from "react-router";

import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import {
  loadPageContentContent,
  loadPageContentContentVariables
} from "./__generated__/loadPageContentContent";
import showdown from "showdown";
import MarkdownRenderer from "Components/MarkdownRenderer";
import { canEditPage, slugs } from "Utils/permissions";
import { useSimpleStore } from "Libs/simpleStore";

const mark = new showdown.Converter();
mark.setFlavor("github");

const StyledMd = styled(MarkdownRenderer)``;

type PageProps = {
  match: match<{ slug: string }>;
};

const LOAD_PAGE = gql`
  query loadPageContentContent($slug: String!) {
    findOnePage(where: { slug: $slug }) {
      title
      content
      draftOwner {
        id
      }
      canEdit {
        slug
      }
    }
  }
`;

const TopBar = styled.div`
  margin-bottom: 0px;
`;

const Content = styled.div`
  line-height: 1.8;
  .title {
    font-size: 50px;
  }
`;

export default ({ match }: PageProps) => {
  const { data, loading } = useQuery<
    loadPageContentContent,
    loadPageContentContentVariables
  >(LOAD_PAGE, {
    variables: { slug: match.params.slug }
  });
  const page = data && data.findOnePage;
  const { roles, user } = useSimpleStore();
  if (!page || loading) return null;
  return (
    <div style={{ maxWidth: 768, margin: "0 auto" }}>
      {canEditPage(user, roles, page) && (
        <TopBar>
          <Link to={`/page/${match.params.slug}/edit`}>
            <Button icon="edit" minimal>
              Editer
            </Button>
          </Link>
        </TopBar>
      )}
      <Content>
        <h1 className="title">{page.title}</h1>
        <StyledMd
          dangerouslySetInnerHTML={{
            __html: mark.makeHtml(page.content || "")
          }}
        />
      </Content>
    </div>
  );
};
