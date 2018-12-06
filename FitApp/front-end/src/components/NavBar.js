import React, { Component } from 'react';
import '../style/style.css';
import logo from '../png-elements/logo.png';
import white from '../png-elements/nav-toggle-white.png';
import color from '../png-elements/nav-toggle-color.png';

class NavBar extends Component {
    dropNavBar = () => {
        document.getElementById("nav-content").classList.toggle("show-nav");
    };

    render() {
        return (
            <div className="col-lg-3 navbar-wrapper">
                <img
                    alt="toggle"
                    src={color}
                    className="toggle-btn"
                    onClick={this.dropNavBar}
                >
                </img>
                <ul className="nav flex-column" id="nav-content">
                    <img alt="logo" src={logo} className="navbar-logo"/>
                    <div className="nav-cate">
                        <li className="nav-item">
                            <div className="navbar-bullet"></div>
                            <a className="nav-link" href="#">progress</a>
                        </li>
                        <li className="nav-item">
                            <div className="navbar-bullet"></div>
                            <a className="nav-link" href="#">schedule</a>
                        </li>
                        <li className="nav-item">
                            <div className="navbar-bullet"></div>
                            <a className="nav-link" href="#">tracking</a>
                        </li>
                        <li className="nav-item">
                            <div className="navbar-bullet"></div>
                            <a className="nav-link" href="#">guidance</a>
                        </li>
                        <li className="nav-item">
                            <div className="navbar-bullet"></div>
                            <a className="nav-link" href="#">settings</a>
                        </li>
                    </div>
                </ul>
            </div>
        );
    }
}

export default NavBar;
