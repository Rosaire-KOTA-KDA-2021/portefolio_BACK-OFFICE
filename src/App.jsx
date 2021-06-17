import logo from "./logo.svg";
import "./App.style.scss";

import { Switch, Route, useParams } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/shared/navbar/Navbar";
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
      </Switch>
    </>
  );
};

export default App;
