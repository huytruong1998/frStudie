import React, { Component } from 'react';
import '../style/style.css';
import logo from '../png-elements/logo.png';
import white from '../png-elements/logo-white.png';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplay:  false
        }
    }

    dropNavBar = () => {
        this.setState({
            isDisplay: !this.state.isDisplay
        });
    };

    render() {
        return (
            <div className="col-lg-3 navbar-wrapper">
                <div className="toggle-btn" onClick={this.dropNavBar}>
                    <div className="toggle-style">
                        <div className={ this.state.isDisplay ? "toggle-line change-white" : "toggle-line"}></div>
                        <div className={ this.state.isDisplay ? "toggle-line change-white" : "toggle-line"}></div>
                        <div className={ this.state.isDisplay ? "toggle-line change-white" : "toggle-line"}></div>
                    </div>
                </div>
                <ul id="nav-content" className={ this.state.isDisplay === true ? "show-nav nav flex-column" : "nav flex-column"}>
                    <img id="color-logo" alt="logo" src={logo} className="navbar-logo"/>
                    <div id="white-logo">
                        <img alt="logo" src={white} className="navbar-logo"/>
                    </div>
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
