import React, { Component } from "react";
import "../../../style/style.css";
import { logoutUser } from "../../../actions/authActions";
import { clearCurrentProgress } from "../../../actions/progressActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Setting extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProgress();
    this.props.logoutUser();
    this.props.history.push("/login");
  }
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="choose-layout">
        <div>
          <div>
            <Link to="/layout/editgoal">
              <button className="main-btn">edit goal</button>
            </Link>
          </div>
          <div>
            <Link to="/layout/editprofile" className="main-btn">
              edit profile
            </Link>
          </div>
          <div>
            {/* <button >Logout</button> */}
            <button
              className="sign-out"
              onClick={this.onLogoutClick.bind(this)}
            >
              sign out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Setting.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProgress }
)(Setting);
