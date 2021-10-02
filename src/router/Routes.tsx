import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Masterbrian99Button from "../containers/Masterbrian99Button/Masterbrian99Button";
import CategoryScreen from "../screens/CategoryScreen";
import MainScreen from "../screens/MainScreen";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainScreen} />
        <Route path="/category" exact component={CategoryScreen} />
        <Route path="/new" exact component={Masterbrian99Button} />
      </Switch>
    </Router>
  );
};

export default Routes;
