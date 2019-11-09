import React from "react";
import styled from "styled-components";
import EditPage from "./Edit";
import { Route, Switch, Redirect } from "react-router-dom";
import Page from "./Page";
import SideBar from "Components/SideBar";

const StyledPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow: auto;
`;

export default () => {
  if (!localStorage.getItem("access_token")) return <Redirect to="/login" />;
  return (
    <StyledPage>
      <SideBar />
      <Content>
        <Switch>
          <Route path="/create-page" exact component={EditPage} />
          <Route path="/page/:slug" exact component={Page} />
          <Route path="/page/:slug/edit" exact component={EditPage} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Content>
    </StyledPage>
  );
};
