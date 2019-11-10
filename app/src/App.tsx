import React, { useEffect } from "react";
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

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Mono&display=swap');
  body {
    font-family: 'PT Mono', monospace; 
     h1 {
      font-size : 50px;
      margin-bottom : 20px;
    }
    h2 {
      font-size : 30px;
      margin-bottom : 10px;
    }
    a {
      text-decoration : none;
    }
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
