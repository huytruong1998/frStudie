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
            <Link to="/layout/progress" className="no-underline">
              <li className="nav-item">
                <div className="navbar-bullet" />

                <p className="nav-link">progress </p>
              </li>
            </Link>
            <Link to="/layout/schedule" className="no-underline">
              <li className="nav-item">
                <div className="navbar-bullet" />

                <p className="nav-link">schedule</p>
              </li>
            </Link>
            <Link to="/layout/tracking" className="no-underline">
              <li className="nav-item">
                <div className="navbar-bullet" />

                <p className="nav-link">tracking</p>
              </li>
            </Link>
            <Link to="/layout/guidance" className="no-underline">
              <li className="nav-item">
                <div className="navbar-bullet" />
                <p className="nav-link">guidance</p>
              </li>
            </Link>
            <Link to="/layout/setting" className="no-underline">
              <li className="nav-item">
                <div className="navbar-bullet" />

                <p className="nav-link">settings</p>
              </li>
            </Link>
          </div>
        </ul>
      </div>
    );
  }
}

export default NavBar;
