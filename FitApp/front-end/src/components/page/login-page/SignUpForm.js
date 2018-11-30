import React, { Component } from 'react';
import '../../../style/style.css';
import logo from '../../../png-elements/logo.png';

class SignUpForm extends Component {
    render() {
        return (
            <div className="authenticate-form-align">
                <img alt="logo" src={logo} className="authenticate-logo"/>
                <form className="authenticate-input">
                    <input type="text" placeholder="EMAIL"/>
                    <input type="password" placeholder="PASSWORD"/>
                    <input type="password" placeholder="CONFIRM PASSWORD"/>
                </form>
                <button className="authenticate-button" href="#">sign up</button>
            </div>
        );
    }
}

export default SignUpForm;
