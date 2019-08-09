import React, { useState } from "react";
import styled from "styled-components";
import { H1, Button, Tag, Collapse, Card, H3, H5 } from "@blueprintjs/core";
import { useApolloClient, useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import slugify from "slugify";
import useRouter from "use-react-router";
import toast from "Libs/toast";
import Textarea from "react-autosize-textarea";

import { savePage, savePageVariables } from "./__generated__/savePage";
import { loadPage_findOnePage } from "./__generated__/loadPage";
import { Link } from "react-router-dom";
import {
  findManyRole_findManyRole,
  findManyRole
} from "./__generated__/findManyRole";
import {
  loadPageContentContent,
  loadPageContentContentVariables
} from "./__generated__/loadPageContentContent";
import { deletePage, deletePageVariables } from "./__generated__/deletePage";

const roleIn = (
  role: findManyRole_findManyRole,
  roles: findManyRole_findManyRole[] | null | undefined
): boolean => {
  return !!roles && !!roles.find(thisRole => thisRole.id === role.id);
};

const toggleRole = (
  role: findManyRole_findManyRole,
  roles: findManyRole_findManyRole[] | null | undefined
): findManyRole_findManyRole[] => {
  if (!roles) return [];
  const isIn = roleIn(role, roles);
  if (isIn) return roles.filter(r => r.id !== role.id);
  else return [...roles, role];
};

const SAVE_PAGE = gql`
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

const GET_PAGES = gql`
  query getPages {
    findManyPage {
      id
      title
      content
      slug
    }
  }
`;

const DELETE_PAGE = gql`
  mutation deletePage($id: ID!) {
    deleteOnePage(where: { id: $id }) {
      id
    }
  }
`;

const LOAD_PAGE = gql`
  query loadPage($slug: String!) {
    findOnePage(where: { slug: $slug }) {
      id
      slug
      title
      content
      canView {
        slug
        id
      }
      canEdit {
        slug
        id
      }
    }
  }
`;

const GET_ROLES = gql`
  query findManyRole {
    findManyRole {
      id
      slug
    }
  }
`;

const TopBar = styled.div`
  margin-bottom: 20px;
`;

const StyledTag = styled(Tag)`
  margin-right: 10px;
  cursor: pointer;
`;

const StyledTitleInput = styled.input`
  padding: 10px;
  border: 2px dashed transparent;

  outline: none;
  font: inherit;
  width: 100%;
  &:hover,
  &:focus {
    border-color: #f1f1f1;
  }
`;

const StyledContentInput = styled(Textarea)`
  padding: 10px;
  border: 2px dashed transparent;
  outline: none;
  width: 100%;
  font: inherit;
  line-height: 1.8;
  resize: none;
  &:hover,
  &:focus {
    //background-color: #f9f9f9;
    border-color: #f1f1f1;
  }
`;

export const EditPage = () => {
  const { match, history } = useRouter<{ slug: string }>();
  const { data } = useQuery<
    loadPageContentContent,
    loadPageContentContentVariables
  >(LOAD_PAGE, {
    variables: { slug: match.params.slug }
  });
  const page = (data && data.findOnePage) || null;
  if (page) return <Editor page={page} />;
  return null;
};

export const CreatePage = () => {
  const { history } = useRouter<{ slug: string }>();
  const page = { title: "", content: "", slug: "" };
  return (
    <Editor
      page={page}
      onSavePage={slug => history.push("/page/" + slug + "/edit")}
      isNew
    />
  );
};

const Editor = ({
  page,
  onSavePage,
  isNew = false
}: {
  page: Partial<loadPage_findOnePage>;
  onSavePage?: (slug: string) => void;
  isNew?: boolean;
}) => {
  const { history } = useRouter();
  const [title, setTitle] = useState(page.title || "");
  const [content, setContent] = useState(page.content || "");

  const [showPermissions, setShowPermissions] = useState(false);
  const [canView, setCanView] = useState(page.canView || []);
  const [canEdit, setCanEdit] = useState(page.canEdit || []);
  const { data } = useQuery<findManyRole>(GET_ROLES);
  const roles = (data && data.findManyRole) || [];

  const client = useApolloClient();
  const { refetch: updatePages } = useQuery(GET_PAGES, { skip: true });
  const [deletePage] = useMutation<deletePage, deletePageVariables>(
    DELETE_PAGE
  );
  const slug = page.slug || slugify(title);

  const onDelete = async () => {
    if (!page.id) return;
    await deletePage({ variables: { id: page.id } });
    await updatePages();
    history.push("/");
  };

  const onSave = async () => {
    console.log(canEdit, canView);
    await client.mutate<savePage, savePageVariables>({
      mutation: SAVE_PAGE,
      variables: {
        slug,
        dataCreate: {
          title,
          content,
          slug,
          published: true,
          canView: { connect: canView.map(r => ({ id: r.id })) },
          canEdit: { connect: canEdit.map(r => ({ id: r.id })) }
        },
        dataUpdate: {
          title,
          content,
          canView: { set: canView.map(r => ({ id: r.id })) },
          canEdit: { set: canEdit.map(r => ({ id: r.id })) }
        }
      }
    });
    await updatePages();
    toast.show({ message: "Saved", icon: "tick" });
    onSavePage && onSavePage(slug);
  };
  return (
    <div style={{ maxWidth: 768, margin: "0 auto" }}>
      <TopBar>
        {!isNew && (
          <Link to={`/page/${slug}`}>
            <Button icon="arrow-left" minimal />
          </Link>
        )}
        <Button icon="floppy-disk" minimal onClick={onSave}>
          Save
        </Button>
        <Button icon="trash" intent="danger" minimal onClick={onDelete}>
          Delete
        </Button>
      </TopBar>
      <div>
        <H1>
          <StyledTitleInput
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </H1>
        <StyledContentInput
          placeholder="Write markdown ..."
          value={content || ""}
          onChange={(e: any) => setContent(e.target.value)}
        />
      </div>
      <Button
        icon="person"
        style={{ marginTop: 10 }}
        onClick={() => setShowPermissions(!showPermissions)}
      >
        Permissions
      </Button>
      <Collapse isOpen={showPermissions}>
        <Card style={{ marginTop: 10 }}>
          <H3>Permissions</H3>
          <H5>Can View</H5>
          <p>
            {roles.map(role => (
              <StyledTag
                interactive
                minimal={!roleIn(role, canView)}
                onClick={() => setCanView(toggleRole(role, canView))}
              >
                {role.slug.toUpperCase()}
              </StyledTag>
            ))}
          </p>
          <H5>Can Edit</H5>
          <p>
            {roles.map(role => (
              <StyledTag
                interactive
                minimal={!roleIn(role, canEdit)}
                onClick={() => setCanEdit(toggleRole(role, canEdit))}
              >
                {role.slug.toUpperCase()}
              </StyledTag>
            ))}
          </p>
        </Card>
      </Collapse>
    </div>
  );
};
