import React, { Component } from "react";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Layout extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  }
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.onLogoutClick.bind(this)}>Logout</button> */}

        <NavBar />
      </div>
    );
  }
}

Layout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Layout);
