import logo from "./logo.svg";
import "./App.style.scss";

import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/shared/navbar/Navbar";
import { AddProject } from "./pages/projects/addProject/AddProject";
import Detail from "./pages/projects/detail/Detail";
const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/project/add">
          <AddProject />
        </Route>
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Redirect form="/project/add" to="/" />;
      </Switch>
    </>
  );
};

export default App;
