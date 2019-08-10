import React, { useState } from "react";
import { getUsers_users, getUsers } from "./__generated__/getUsers";

import gql from "graphql-tag";
import styled from "styled-components";
import {
  Card,
  Elevation,
  H1,
  Button,
  EditableText,
  MenuItem,
  H3
} from "@blueprintjs/core";
import { MultiSelect } from "@blueprintjs/select";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { addUser, addUserVariables } from "./__generated__/addUser";
import { deleteUser, deleteUserVariables } from "./__generated__/deleteUser";
import { getRoles_roles, getRoles } from "./__generated__/getRoles";
import { updateUser, updateUserVariables } from "./__generated__/updateUser";

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $userData: UserUpdateInput!) {
    updateOneUser(where: { id: $id }, data: $userData) {
      id
      roles {
        slug
      }
    }
  }
`;

const GET_USERS = gql`
  query getUsers {
    users: findManyUser {
      id
      email
      roles {
        slug
      }
    }
  }
`;

const ADD_USER = gql`
  mutation addUser($user: UserCreateInput!) {
    user: createOneUser(data: $user) {
      id
      email
      roles {
        slug
      }
    }
  }
`;

const GET_ROLES = gql`
  query getRoles {
    roles: findManyRole {
      slug
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    user: deleteOneUser(where: { id: $userId }) {
      id
    }
  }
`;

const Body = styled.div`
  margin: 10px 0;
`;

const Email = styled.div`
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

type UserLine = {
  user: getUsers_users;
  roles: getRoles_roles[];
  onDelete: () => void;
};

const UserLine = ({ user, onDelete, roles }: UserLine) => {
  const { email, roles: userRoles } = user;
  const [updateUser] = useMutation<updateUser, updateUserVariables>(
    UPDATE_USER
  );
  const addRole = (role: getRoles_roles) => {
    delete role.__typename;
    updateUser({
      variables: {
        id: user.id,
        userData: { roles: { connect: [{ slug: role.slug }] } }
      }
    });
  };
  const deleteRole = (role: getRoles_roles | string | null) => {
    if (typeof role === "string")
      role =
        (user.roles && user.roles.find(userRole => role === userRole.slug)) ||
        null;

    if (!role) return;
    delete role.__typename;
    updateUser({
      variables: {
        id: user.id,
        userData: { roles: { disconnect: [{ slug: role.slug }] } }
      }
    });
  };
  return (
    <Line>
      <Email>{email}</Email>
      <div style={{ width: 300 }}>
        <MultiSelect<getRoles_roles>
          onItemSelect={role => addRole(role)}
          selectedItems={userRoles ? userRoles : []}
          popoverProps={{ minimal: true }}
          itemRenderer={(role, { handleClick }) => (
            <MenuItem text={role.slug} onClick={handleClick} />
          )}
          tagRenderer={role => role.slug}
          placeholder={"Set roles"}
          fill
          items={roles}
          tagInputProps={{ onRemove: role => deleteRole(role) }}
        />
      </div>
      <Button icon="trash" intent="danger" onClick={onDelete}>
        Delete
      </Button>
    </Line>
  );
};

export default () => {
  const [newUserEmail, setNewUserEmail] = useState("");
  const { data: rolesData } = useQuery<getRoles>(GET_ROLES);
  const { data, refetch } = useQuery<getUsers>(GET_USERS);
  const [addUser] = useMutation<addUser, addUserVariables>(ADD_USER, {
    variables: { user: { email: newUserEmail } }
  });
  const [deleteUser] = useMutation<deleteUser, deleteUserVariables>(
    DELETE_USER
  );

  const users = (data && data.users) || [];
  const roles = (rolesData && rolesData.roles) || [];
  return (
    <div>
      <H3>Users</H3>
      <Body>
        {users.map(user => (
          <UserLine
            key={user.id}
            user={user}
            roles={roles}
            onDelete={() =>
              deleteUser({ variables: { userId: user.id } }).then(() =>
                refetch()
              )
            }
          />
        ))}

        <Line>
          <Email>
            <EditableText
              placeholder="New email address"
              value={newUserEmail}
              onChange={setNewUserEmail}
            />
          </Email>
          <Button
            intent="success"
            icon="plus"
            onClick={() =>
              addUser()
                .then(() => refetch())
                .then(() => setNewUserEmail(""))
            }
          >
            Add User
          </Button>
        </Line>
      </Body>
    </div>
  );
};
