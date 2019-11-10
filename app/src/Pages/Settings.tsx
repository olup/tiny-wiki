import React, { useState } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { settingsGetUSers } from "./__generated__/settingsGetUSers";
import Button from "Components/Button";
import {
  settingsAddUSersVariables,
  settingsAddUSers
} from "./__generated__/settingsAddUSers";
import {
  settingsDeleteUSersVariables,
  settingsDeleteUSers
} from "./__generated__/settingsDeleteUSers";

const GET_USERS = gql`
  query settingsGetUSers {
    users {
      id
      email
    }
  }
`;

const ADD_USER = gql`
  mutation settingsAddUSers($email: String!) {
    createOneUser(data: { email: $email }) {
      id
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation settingsDeleteUSers($email: String!) {
    deleteOneUser(where: { email: $email }) {
      id
    }
  }
`;

const UserInput = styled.input`
  padding: 10px;
  border: 1px solid #eee;
  margin-right: 10px;
  font-family: inherit;
  outline: none;
`;

const AddUser = ({ onClose }: { onClose?: () => void }) => {
  const [userEmail, setUserEmail] = useState("");
  const [addUser] = useMutation<settingsAddUSers, settingsAddUSersVariables>(
    ADD_USER,
    {
      variables: { email: userEmail }
    }
  );
  const onAddUser = async () => {
    await addUser();
    onClose && onClose();
  };
  return (
    <div style={{ marginTop: 10 }}>
      <UserInput
        value={userEmail}
        onChange={(e: any) => setUserEmail(e.target.value)}
        placeholder="User Email"
      />
      <Button onClick={onAddUser}>Ok</Button>
      <Button onClick={() => onClose && onClose()}>Cancel</Button>
    </div>
  );
};

export default () => {
  const [deleteUser] = useMutation<
    settingsDeleteUSers,
    settingsDeleteUSersVariables
  >(DELETE_USER);
  const { data, refetch } = useQuery<settingsGetUSers>(GET_USERS);
  const users = (data && data.users) || [];

  const [showAddUser, setShowAddUser] = useState(false);

  const onUserAdded = () => {
    setShowAddUser(false);
    refetch();
  };

  const onDeleteUser = async (email: string) => {
    await deleteUser({ variables: { email } });
    refetch();
  };

  return (
    <div style={{ maxWidth: 768, margin: "0 auto" }}>
      <h1>Settings</h1>
      <h2>Users</h2>
      {users.map(user => (
        <p>
          {user.email}{" "}
          <Button onClick={() => onDeleteUser(user.email)}>Delete</Button>
        </p>
      ))}
      {!showAddUser && (
        <Button onClick={() => setShowAddUser(true)}>Add user</Button>
      )}
      {showAddUser && <AddUser onClose={onUserAdded} />}
    </div>
  );
};
