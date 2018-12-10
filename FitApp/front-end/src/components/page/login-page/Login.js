import React, { Component } from 'react';
import Backdrop from './Backdrop';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import "../../../style/style.css";

class Login extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 backdrop-padding">
                            <Backdrop />
                        </div>
                        <div className="col-md-6">
                            <LoginForm/>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}

export default Login;
