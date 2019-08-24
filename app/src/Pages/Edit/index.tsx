import { useQuery, useApolloClient, useMutation } from "@apollo/react-hooks";
import { Button, Tab, Tabs } from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useRouter from "use-react-router";
import Editor from "./Editor";
import {
  LOAD_PAGE,
  GET_PAGES,
  GET_ROLES,
  DELETE_PAGE,
  SAVE_PAGE
} from "./queries";
import Settings from "./Settings";
import { PageState } from "./store";
import { findManyRole } from "./__generated__/findManyRole";
import { deletePage, deletePageVariables } from "./__generated__/deletePage";
import { loadPage_findOnePage } from "./__generated__/loadPage";
import { savePage, savePageVariables } from "./__generated__/savePage";
import toast from "Libs/toast";
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
  const { match, history } = useRouter<{ slug: string }>();
  const slug = match.params.slug;
  return (
    <PageState.Provider>
      <Loader slug={slug} />
      <PageWrapper />
    </PageState.Provider>
  );
};

const Loader = ({ slug }: { slug: string }) => {
  const updatePage = PageState.useStoreActions(a => a.updatePage);
  const setLoading = PageState.useStoreActions(a => a.setLoading);
  const setIsNew = PageState.useStoreActions(a => a.setIsNew);

  setIsNew(!slug);

  const { data, loading } = useQuery<
    loadPageContentContent,
    loadPageContentContentVariables
  >(LOAD_PAGE, {
    skip: !slug,
    variables: { slug }
  });

  const page = (data && data.findOnePage) || {
    title: "",
    content: "",
    slug: ""
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
        {!isNew && (
          <Link to={`/page/${(page && page.slug) || ""}`}>
            <Button icon="arrow-left" minimal />
          </Link>
        )}
        <Button icon="floppy-disk" minimal onClick={onSave}>
          {isNew ? "Create" : "Save"}
        </Button>
        {!isNew && (
          <Button icon="trash" intent="danger" minimal onClick={onDelete}>
            Delete
          </Button>
        )}
      </TopBar>
      <Tabs>
        <Tab id="edit" title="Edit" panel={<Editor />} />
        {!isNew && <Tab id="settings" title="Settings" panel={<Settings />} />}
      </Tabs>
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
    await client.mutate<savePage, savePageVariables>({
      mutation: SAVE_PAGE,
      variables: {
        slug: page.slug || "",
        dataCreate: {
          title: page.title || "",
          content: page.content || "",
          slug: page.slug || slugify(page.title || ""),
          // @ts-ignore
          draftOwner: { connect: { id: simpleStore.user.id } },
          published: true,
          canView: {
            connect: page.canView && page.canView.map(r => ({ slug: r.slug }))
          },
          canEdit: {
            connect: page.canEdit && page.canEdit.map(r => ({ slug: r.slug }))
          }
        },
        dataUpdate: {
          title: page.title || "",
          content: page.content || "",
          canView: {
            set: page.canView && page.canView.map(r => ({ slug: r.slug }))
          },
          canEdit: {
            set: page.canEdit && page.canEdit.map(r => ({ slug: r.slug }))
          }
        }
      }
    });
    await updatePages();
    toast.show({ message: "Saved", icon: "tick" });
    if (isNew) history.push(`/page/${slugify(page.title || "")}/edit`);
  };

  return { onDelete, onSave };
};
