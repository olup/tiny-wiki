import React from "react";
import { Button } from "@blueprintjs/core";
import styled from "styled-components";

import { GoogleLogin } from "react-google-login";
import gql from "graphql-tag";
import { useApolloClient } from "react-apollo-hooks";

import useRouter from "use-react-router";

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
  const onLogin = async (token: string) => {
    const result = await client.mutate({
      mutation: LOGIN_WITH_GOOGLE_ID,
      variables: { token }
    });
    const jwt = result.data.loginWithGoogleToken;
    localStorage.setItem("access_token", jwt);
    history.push("/");
  };
  return (
    <Page>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
        render={props => (
          <Button large icon="key" onClick={() => props && props.onClick()}>
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
