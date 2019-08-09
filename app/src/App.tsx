import React from "react";

import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import Login from "Pages/Login";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "Libs/apollo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "Pages/Home";
import { createGlobalStyle } from "styled-components";
import decodeToken from "jwt-decode";
import simpleStore from "Libs/simpleStore";

const GlobalStyle = createGlobalStyle`
  a:hover {
    text-decoration : none;
  }
`;

const App: React.FC = () => {
  if (localStorage.getItem("access_token")) {
    const userData: any = decodeToken(
      localStorage.getItem("access_token") || ""
    );
    simpleStore.user = userData.user;
    simpleStore.roles = userData.roles;
  }
  return (
    <Router>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route
              path="/logout"
              exact
              render={() => {
                localStorage.removeItem("access_token");
                return <Redirect to="/login" />;
              }}
            />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default App;
