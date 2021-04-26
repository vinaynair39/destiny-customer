import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../App";
import Success from "../Success";

const AppRouter = ({}) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/success" component={Success} exact />
      </Switch>
    </Router>
  );
};
export default AppRouter;
