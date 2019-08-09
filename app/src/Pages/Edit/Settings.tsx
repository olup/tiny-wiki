import styled from "styled-components";
import { H5, H3, Tag } from "@blueprintjs/core";
import { PageState } from "./store";
import { useQuery } from "@apollo/react-hooks";
import { GET_ROLES } from "./queries";
import { getRoles } from "Pages/Settings/__generated__/getRoles";
import {
  findManyRole_findManyRole,
  findManyRole
} from "Pages/__generated__/findManyRole";
import React from "react";

const StyledTag = styled(Tag)`
  margin-right: 10px;
  cursor: pointer;
`;

const roleIn = (
  role: findManyRole_findManyRole,
  roles: findManyRole_findManyRole[] | null | undefined
) => {
  if (!roles) return false;
  return roles.map(r => r.id).includes(role.id);
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

export default () => {
  const page = PageState.useStoreState(state => state.page);
  const updatePage = PageState.useStoreActions(actions => actions.updatePage);
  const { data } = useQuery<findManyRole>(GET_ROLES);
  const roles = (data && data.findManyRole) || [];
  if (!page) return null!;
  return (
    <>
      <H3>Permissions</H3>
      <H5>Can View</H5>
      {roles.map(role => (
        <StyledTag
          interactive
          minimal={!roleIn(role, page.canView)}
          onClick={() =>
            updatePage({ canView: toggleRole(role, page.canView) })
          }
        >
          {role.slug.toUpperCase()}
        </StyledTag>
      ))}
      <H5>Can Edit</H5>
      {roles.map(role => (
        <StyledTag
          interactive
          minimal={!roleIn(role, page.canEdit)}
          onClick={() =>
            updatePage({ canEdit: toggleRole(role, page.canEdit) })
          }
        >
          {role.slug.toUpperCase()}
        </StyledTag>
      ))}
    </>
  );
};
