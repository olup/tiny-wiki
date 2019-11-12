import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import useRouter from "use-react-router";
import Button from "Components/Button";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import {
  loadPageContentContent,
  loadPageContentContentVariables
} from "./__generated__/loadPageContentContent";
import ReactMarkdown from "react-markdown";
import MarkdownRenderer from "Components/MarkdownRenderer";
import { canEditPage } from "Utils/permissions";
import { useSimpleStore } from "Libs/simpleStore";
import PageContainer from "Components/PageContainer";
import dayjs from "dayjs";

const StyledMd = styled(MarkdownRenderer)``;

const LOAD_PAGE = gql`
  query loadPageContentContent($slug: String!) {
    page(where: { slug: $slug }) {
      id
      title
      content
      updatedAt
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
`;

const Note = styled.div`
  color: #ccc;
  font-style: italic;
  margin-top: 10px;
`;

export default () => {
  const match = useRouter<{ slug: string }>().match.params;
  console.log(match);
  const slug = (match && match.slug) || "";

  const { data, loading, error } = useQuery<
    loadPageContentContent,
    loadPageContentContentVariables
  >(LOAD_PAGE, {
    variables: { slug }
  });

  if (error) console.log(error);

  const page = !error && data && data.page;

  const { roles, user } = useSimpleStore();

  if (!page) {
    if (loading) return null;
    return (
      <div>
        La page <b>{slug}</b> n'existe pas. Voulez-vous la{" "}
        <Link to={`/page/${slug}/edit`}>
          <Button>créer</Button>
        </Link>{" "}
        ?
      </div>
    );
  }

  return (
    <PageContainer>
      {canEditPage(user, roles, page) && (
        <TopBar>
          <Link to={`/page/${slug}/edit`}>
            <Button>Edit</Button>
          </Link>
        </TopBar>
      )}
      <Content>
        <Note>
          Last update {dayjs(page.updatedAt).format("DD/MM/YYYY hh:mm")}
        </Note>
        <h1 className="title">{page.title}</h1>
        <StyledMd>
          <ReactMarkdown
            source={page.content || undefined}
            renderers={{
              link: args => {
                const href = args.href.replace("@", "/page/");
                return <Link to={href}>{args.children}</Link>;
              }
            }}
          />
        </StyledMd>
      </Content>
    </PageContainer>
  );
};
