import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.styles.scss";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import UserMenu from "../userMenu/UserMenu";

export const ButtonCustom = (props) => {
  const renderButton = () => {
    if (props.label == "chat") {
      return (
        <Button className={props.className}>
          <Link to={props.link}>{props.label}</Link>
        </Button>
      );
    } else {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={3}>
            <Button className={props.className}>
              <Link to={props.link}>{props.label}</Link>
            </Button>
          </Grid>
        </Grid>
      );
    }
  };
  return <>{renderButton()}</>;
};
const Navbar = (props) => {
  return (
    <div className="header">
      <div className="navbar__collapse">
        <Link to="/" className="logo">
          Dashboard
        </Link>
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
      </div>

      <div className="navbar__search">
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
