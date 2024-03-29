import React from "react";
import { Route, Router, Switch, Redirect, withRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Home from "../Home";
import history from "../../utils/history";
import Information from "../Information";
import Question from "../Question";
import Tutorial from "../Tutorial";
import { theme } from "../../theme";
import { useSelector } from "react-redux";
import { selectHighContrast } from "../../store/Home/selectors";
import Intro from "../Intro";
export const Container = styled.div`
  height: 97vh;
`;

const App = () => {
  const current_theme = theme(useSelector(selectHighContrast));
  return (
    <ThemeProvider theme={current_theme}>
      <Container>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to={{ pathname: "/intro" }} />
            </Route>
            <Route exact path="/intro" component={withRouter(Intro)} />
            <Route exact path="/home" component={withRouter(Home)} />
            <Route exact path="/info" component={withRouter(Information)} />
            <Route
              exact
              path="/info/:path"
              component={withRouter(Information)}
            />
            <Route exact path="/pregunta" component={withRouter(Question)} />
            <Route
              exact
              path="/tutorial/:type"
              component={withRouter(Tutorial)}
            />
            <Route
              exact
              path="/tutorial/:type/:path"
              component={withRouter(Tutorial)}
            />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
