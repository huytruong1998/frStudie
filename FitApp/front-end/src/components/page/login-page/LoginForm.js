import React, { Component } from 'react';
import '../../../style/style.css';
import logo from '../../../png-elements/logo.png';

class LoginForm extends Component {
    render() {
        return (
            <div className="authenticate-form-align">
                <img alt="logo" src={logo} className="authenticate-logo"/>
                <form className="authenticate-input">
                    <input type="text" placeholder="EMAIL"/>
                    <input type="password" placeholder="PASSWORD"/>
                </form>
                <button className="authenticate-button" href="#">sign in</button>
                <div className="sign-up-ask">
                    <p>No account yet?</p>
                    <a>Sign up</a>
                </div>
            </div>
        );
    }
}

export default LoginForm;
