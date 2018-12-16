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
            <Link to="/layout/progress">
              <li className="nav-item">
                <div className="navbar-bullet" />

                <a className="nav-link">progress </a>
              </li>
            </Link>
            <Link to="/layout/schedule">
              <li className="nav-item">
                <div className="navbar-bullet" />

                <a className="nav-link">schedule</a>
              </li>
            </Link>
            <Link to="/layout/tracking">
              <li className="nav-item">
                <div className="navbar-bullet" />

                <a className="nav-link">tracking</a>
              </li>
            </Link>
            <Link to="/layout/guidance">
              <li className="nav-item">
                <div className="navbar-bullet" />
                <a className="nav-link">guidance</a>
              </li>
            </Link>
            <Link to="/layout/setting">
              <li className="nav-item">
                <div className="navbar-bullet" />

                <a className="nav-link">settings</a>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
