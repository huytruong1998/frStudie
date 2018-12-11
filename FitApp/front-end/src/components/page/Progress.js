import React, { Component } from "react";
import "../../style/style.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getCurrentProgress } from "./../../actions/progressActions";
import { connect } from "react-redux";
import Spinner from "./Spinner";

// var today = new Date();
// var date =
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

class Progress extends Component {
  componentDidMount() {
    this.props.getCurrentProgress();
  }
  render() {
    const { progress, loading } = this.props.progress;

    let progressContent;

    if (progress === null || loading) {
      progressContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(progress).length > 0) {
        progressContent = (
          <div>
            <div className="progress-date">
              <p>thursday 11.09.18</p>
            </div>
            <div className="progress-spacing">
              <div className="title">calories consumed</div>
              <div className="progress-line goal-line">
                <p className="goal">goal</p>
                <div className="bar-max">
                  <div className="bar-pink" />
                </div>
                <p className="kcal-pink">{progress.consumedgoal} kcal</p>
              </div>
              <div className="progress-line">
                <p className="orange">consume</p>
                <div className="bar-max">
                  <div
                    className="bar-orange"
                    style={{
                      width:
                        (progress.consumed / progress.consumedgoal) * 100 + "%"
                    }}
                  />
                </div>
                <p className="kcal-orange">
                  {progress.consumed ? progress.consumed : 0} kcal
                </p>
              </div>
            </div>
            <div className="progress-spacing">
              <div className="title">calories burnt</div>
              <div className="progress-line goal-line">
                <p className="goal">goal</p>
                <div className="bar-max">
                  <div className="bar-pink" />
                </div>
                <p className="kcal-pink">{progress.burntgoal} kcal</p>
              </div>
              <div className="progress-line burnt-line">
                <p className="orange">burnt</p>
                <div className="bar-max">
                  <div
                    className="bar-orange"
                    style={{
                      width: (progress.burnt / progress.burntgoal) * 100 + "%"
                    }}
                  />
                </div>
                <p className="kcal-orange">
                  {progress.burnt ? progress.burnt : 0} kcal
                </p>
              </div>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        progressContent = (
          <div>
            <div className="progress-date">
              <p>thursday 11.09.18</p>
            </div>
            <div className="no-data-line">
              <p>Goal has not been set</p>
              <Link className="main-btn" to="/layout/editgoal">
                set goal
              </Link>
            </div>
          </div>
        );
      }
    }
    return <div>{progressContent}</div>;
  }
}

Progress.propTypes = {
  getCurrentProgress: PropTypes.func.isRequired,

  progress: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  progress: state.progress
});

export default connect(
  mapStateToProps,
  { getCurrentProgress }
)(Progress);
