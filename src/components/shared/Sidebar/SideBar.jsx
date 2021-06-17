// @flow
import React from "react";
import "./Sidebar.style.scss";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <ul className="navbar__nav">
      <li>
        <Link to="/"> Dashboard</Link>
      </li>
      <li>
        <Link to="/films"> Ajouter un projet</Link>
      </li>
      <li>
        <Link to="/series">Autres</Link>
      </li>
    </ul>
  );
};
export default SideBar;
