import React from "react";
import { Route, Router, Switch, Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "../Home";
import history from "../../utils/history";
import Information from "../Information";
import Question from "../Question";
import Intro from "../Intro";

export const Container = styled.div`
  height: 97vh;
`;

const App = () => {
  return (
    <Container>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect from="/" to={{ pathname: "/intro" }} />
          </Route>
          <Route exact path="/intro" component={withRouter(Intro)} />
          <Route exact path="/home" component={withRouter(Home)} />
          <Route exact path="/info" component={withRouter(Information)} />
          <Route exact path="/pregunta" component={withRouter(Question)} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
