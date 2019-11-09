import { useQuery, useApolloClient, useMutation } from "@apollo/react-hooks";
import Button from "Components/Button";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useRouter from "use-react-router";
import { useRouteMatch } from "react-router";
import Editor from "./Editor";
import { LOAD_PAGE, GET_PAGES, DELETE_PAGE, SAVE_PAGE } from "./queries";
import { PageState } from "./store";
import { deletePage, deletePageVariables } from "./__generated__/deletePage";
import { savePage, savePageVariables } from "./__generated__/savePage";
import { useSimpleStore } from "Libs/simpleStore";
import slugify from "slugify";
import {
  loadPageContentContent,
  loadPageContentContentVariables
} from "Pages/__generated__/loadPageContentContent";

const TopBar = styled.div`
  margin-bottom: 20px;
`;

export default () => {
  return (
    <PageState.Provider>
      <Loader />
      <PageWrapper />
    </PageState.Provider>
  );
};

const Loader = () => {
  const match = useRouteMatch<{ slug: string }>({ path: "/page/:slug/edit" });
  const setIsNew = PageState.useStoreActions(a => a.setIsNew);
  const isCreation = !match;
  const slug = (match && match.params.slug) || "";

  const updatePage = PageState.useStoreActions(a => a.updatePage);
  const setLoading = PageState.useStoreActions(a => a.setLoading);

  const { data, loading } = useQuery<
    loadPageContentContent,
    loadPageContentContentVariables
  >(LOAD_PAGE, {
    skip: isCreation,
    variables: { slug }
  });

  setIsNew(isCreation || !(data && data.page));

  const page = (data && data.page) || {
    title: "",
    content: "",
    slug
  };

  updatePage(page);
  setLoading(loading);
  return null;
};

const PageWrapper = () => {
  const isNew = PageState.useStoreState(state => state.isNew);
  const loading = PageState.useStoreState(state => state.loading);
  const page = PageState.useStoreState(state => state.page);

  const { onSave, onDelete } = useMethodsHook();

  if (loading) return null;
  return (
    <div style={{ maxWidth: 768, margin: "0 auto" }}>
      <TopBar>
        <Button onClick={onSave}>Save</Button>
        {!isNew && <Button onClick={onDelete}>Delete</Button>}
      </TopBar>
      <Editor />
    </div>
  );
};

const useMethodsHook = () => {
  const { history } = useRouter();
  const page = PageState.useStoreState(state => state.page);
  const isNew = PageState.useStoreState(state => state.isNew);
  const simpleStore = useSimpleStore();
  const { refetch: updatePages } = useQuery(GET_PAGES, { skip: true });
  const [deletePage] = useMutation<deletePage, deletePageVariables>(
    DELETE_PAGE
  );

  const client = useApolloClient();

  if (!page) return { onSave: () => null, onDelete: () => null };

  const onDelete = async () => {
    if (!page.id) return;
    await deletePage({ variables: { id: page.id } });
    await updatePages();
    history.push("/");
  };

  const onSave = async () => {
    const slug =
      page.slug ||
      slugify(page.title || "", {
        lower: true
      });

    await client.mutate<savePage, savePageVariables>({
      mutation: SAVE_PAGE,
      variables: {
        slug: page.slug || "",
        dataCreate: {
          title: page.title || "",
          content: page.content || "",
          slug,
          // @ts-ignore
          draftOwner: { connect: { id: simpleStore.user.id } },
          published: true
        },
        dataUpdate: {
          title: page.title || "",
          content: page.content || ""
        }
      }
    });

    await updatePages();

    history.push(`/page/${slug}`);
  };

  return { onDelete, onSave };
};
