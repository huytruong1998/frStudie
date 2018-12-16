import React, { Component } from "react";
import Backdrop from "./Backdrop";

import "../../../style/style.css";
import logo from "../../../png-elements/logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import classnames from "classnames";

import "../../../style/style.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/layout");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/layout");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 backdrop-padding">
              <Backdrop />
            </div>
            <div className="col-md-6">
              <div className="authenticate-form-align">
                <img alt="logo" src={logo} className="authenticate-logo" />
                <form className="authenticate-input" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className={classnames("", {
                        "is-invalid": errors.email
                      })}
                      placeholder="EMAIL"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className={classnames("", {
                        "is-invalid": errors.password
                      })}
                      placeholder="PASSWORD"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>

                  <button className="authenticate-button" href="#">
                    sign in
                  </button>
                </form>

                <div className="sign-up-ask">
                  <p>No account yet?</p>
                  <Link to="/signup">Sign up</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
