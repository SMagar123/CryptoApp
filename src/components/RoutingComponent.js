import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChartPage from "../pages/ChartPage";
import AboutPage from "../pages/AboutPage";
const RoutingComponent = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        {/* <Route exact path="/charts">
          <ChartPage /> 
        </Route>
        */}
        <Route path="/charts/:id" exact>
          <ChartPage />
        </Route>
      </Switch>
    </div>
  );
};

export default RoutingComponent;
