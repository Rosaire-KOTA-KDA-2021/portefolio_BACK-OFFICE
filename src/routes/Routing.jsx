import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";

import { AddProject } from "../pages/projects/addProject/AddProject";
import Detail from "../pages/projects/detail/Detail";
import { UpdateProject } from "../pages/projects/updateProject/UpdateProject";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/project/add">
          <AddProject />
        </Route>
        <Route exact path="/update/:id">
          <UpdateProject />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Redirect form="/project/add" to="/" />;
      </Switch>
    </>
  );
};

export default Routing;
