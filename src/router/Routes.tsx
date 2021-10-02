import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryScreen from "../screens/CategoryScreen";
import MainScreen from "../screens/MainScreen";
import { routeURL } from "./routes";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/category" exact component={CategoryScreen} />
        {routeURL.map((el, i) => (
          <Route key={i} path={el.path} exact component={el.component} />
        ))}
      </Switch>
    </Router>
  );
};

export default Routes;
