import React, { lazy } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
