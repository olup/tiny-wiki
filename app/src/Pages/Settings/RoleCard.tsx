import React, { useState } from "react";
import gql from "graphql-tag";
import styled from "styled-components";
import {
  Card,
  Elevation,
  H1,
  Button,
  EditableText,
  MenuItem
} from "@blueprintjs/core";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { getRoles_roles, getRoles } from "./__generated__/getRoles";
import { addRoleVariables, addRole } from "./__generated__/addRole";
import { deleteRole, deleteRoleVariables } from "./__generated__/deleteRole";

const GET_ROLES = gql`
  query getRoles {
    roles: findManyRole {
      id
      slug
    }
  }
`;

const ADD_ROLE = gql`
  mutation addRole($role: RoleCreateInput!) {
    role: createOneRole(data: $role) {
      id
      slug
    }
  }
`;

const DELETE_ROLE = gql`
  mutation deleteRole($roleId: ID!) {
    role: deleteOneRole(where: { id: $roleId }) {
      id
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
    <Card elevation={Elevation.TWO} style={{ marginTop: 20 }}>
      <H1>Roles</H1>
      <Body>
        {roles.map(role => (
          <RoleLine
            key={role.id}
            role={role}
            onDelete={() =>
              deleteUser({ variables: { roleId: role.id } }).then(() =>
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
    </Card>
  );
};
