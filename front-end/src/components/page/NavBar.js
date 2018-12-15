import React, { Component } from "react";
import "../../style/style.css";
import logo from "../../png-elements/logo.png";

import color from "../../png-elements/nav-toggle-color.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  dropNavBar = () => {
    document.getElementById("nav-content").classList.toggle("show-nav");
  };

  render() {
    return (
      <div>
        <img
          alt="toggle"
          src={color}
          className="toggle-btn"
          onClick={this.dropNavBar}
        />
        <ul className="nav flex-column" id="nav-content">
          <img alt="logo" src={logo} className="navbar-logo" />
          <div className="nav-cate">
            <li className="nav-item">
              <div className="navbar-bullet" />
              <Link className="nav-link" to="/layout/progress">
                progress
              </Link>
            </li>
            <li className="nav-item">
              <div className="navbar-bullet" />
              <Link className="nav-link" to="/layout/schedule">
                schedule
              </Link>
            </li>
            <li className="nav-item">
              <div className="navbar-bullet" />
              <Link className="nav-link" to="/layout/tracking">
                tracking
              </Link>
            </li>
            <li className="nav-item">
              <div className="navbar-bullet" />
              <Link className="nav-link" to="/layout/guidance">
                guidance
              </Link>
            </li>
            <li className="nav-item">
              <div className="navbar-bullet" />
              <Link className="nav-link" to="/layout/setting">
                settings
              </Link>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
