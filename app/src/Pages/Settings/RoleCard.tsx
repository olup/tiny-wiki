import React, { useState } from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import { Button, EditableText, MenuItem, H3 } from "@blueprintjs/core";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getRoles_roles, getRoles } from "./__generated__/getRoles";
import { addRoleVariables, addRole } from "./__generated__/addRole";
import { deleteRole, deleteRoleVariables } from "./__generated__/deleteRole";

const GET_ROLES = gql`
  query getRoles {
    roles: findManyRole {
      slug
    }
  }
`;

const ADD_ROLE = gql`
  mutation addRole($role: RoleCreateInput!) {
    role: createOneRole(data: $role) {
      slug
    }
  }
`;

const DELETE_ROLE = gql`
  mutation deleteRole($roleSlug: ID!) {
    role: deleteOneRole(where: { slug: $roleSlug }) {
      slug
    }
  }
`;

const Body = styled.div`
  margin: 10px 0;
`;

const Slug = styled.div`
  width: 300px;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-radius: 3px;
  align-items: center;
  &:hover {
    background-color: #f9f9f9;
  }
`;

type RoleLine = {
  role: getRoles_roles;
  onDelete: () => void;
};

const RoleLine = ({ role, onDelete }: RoleLine) => {
  const { slug } = role;
  return (
    <Line>
      <Slug>{slug}</Slug>
      <Button icon="trash" intent="danger" onClick={onDelete}>
        Delete
      </Button>
    </Line>
  );
};

export default () => {
  const [newRoleSlug, setNewRoleSlug] = useState("");
  const { data, refetch } = useQuery<getRoles>(GET_ROLES);
  const [addUser] = useMutation<addRole, addRoleVariables>(ADD_ROLE, {
    variables: { role: { slug: newRoleSlug } }
  });
  const [deleteUser] = useMutation<deleteRole, deleteRoleVariables>(
    DELETE_ROLE
  );

  const roles = (data && data.roles) || [];
  return (
    <div>
      <H3>Roles</H3>
      <Body>
        {roles.map(role => (
          <RoleLine
            key={role.slug}
            role={role}
            onDelete={() =>
              deleteUser({ variables: { roleSlug: role.slug } }).then(() =>
                refetch()
              )
            }
          />
        ))}

        <Line>
          <Slug>
            <EditableText
              placeholder="New role"
              value={newRoleSlug}
              onChange={setNewRoleSlug}
            />
          </Slug>
          <Button
            intent="success"
            icon="plus"
            onClick={() =>
              addUser()
                .then(() => refetch())
                .then(() => setNewRoleSlug(""))
            }
          >
            Add Role
          </Button>
        </Line>
      </Body>
    </div>
  );
};
