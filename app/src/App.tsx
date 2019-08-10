import React, { useEffect } from "react";

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
import { useSimpleStore } from "Libs/simpleStore";
import { storeKeyNameFromField } from "apollo-utilities";

const GlobalStyle = createGlobalStyle`
  a:hover {
    text-decoration : none;
  }
`;

const App: React.FC = () => {
  const simpleStore = useSimpleStore();
  let user: any, roles: any;
  if (localStorage.getItem("access_token")) {
    const userData: any = decodeToken(
      localStorage.getItem("access_token") || ""
    );
    user = userData.user;
    roles = userData.roles;
  }
  useEffect(() => {
    simpleStore.user = user;
    simpleStore.roles = roles;
  }, []);
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
