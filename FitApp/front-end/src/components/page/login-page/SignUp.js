import React, { Component } from "react";
import Backdrop from "./Backdrop";

import SignUpForm from "./SignUpForm";
import "../../../style/style.css";

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 backdrop-padding">
              <Backdrop />
            </div>
            <div className="col-md-6">
              <SignUpForm history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
