import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="/UserList">UserList</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
