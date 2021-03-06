import { useApolloClient } from "@apollo/react-hooks";
import Button from "Components/Button";
import gql from "graphql-tag";
import decodeToken from "jwt-decode";
import { useSimpleStore } from "Libs/simpleStore";
import React from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import useRouter from "use-react-router";
import { FaGooglePlusG, FaGoogle } from "react-icons/fa";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LOGIN_WITH_GOOGLE_ID = gql`
  mutation login($token: String!) {
    loginWithGoogleToken(token: $token)
  }
`;

export default () => {
  const client = useApolloClient();
  const { history } = useRouter();
  const simpleStore = useSimpleStore();
  const onLogin = async (token: string) => {
    const result = await client.mutate({
      mutation: LOGIN_WITH_GOOGLE_ID,
      variables: { token }
    });
    const jwt = result.data.loginWithGoogleToken;
    localStorage.setItem("access_token", jwt);

    const userData: any = decodeToken(
      localStorage.getItem("access_token") || ""
    );
    simpleStore.user = userData.user;
    simpleStore.roles = userData.roles;

    history.push("/");
  };
  return (
    <Page>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
        render={props => (
          <Button onClick={() => props && props.onClick()}>
            Login with Google
          </Button>
        )}
        // @ts-ignore
        onSuccess={response => onLogin(response.tokenId as string)}
        onFailure={res => console.log(res)}
      />
    </Page>
  );
};
