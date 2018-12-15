import React, { Component } from "react";
import "../../../style/style.css";
import backbtn from "../../../png-elements/back-btn.png";
import { Link } from "react-router-dom";
import { createProgress } from "../../../actions/progressActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consumedgoal: 0,

      burntgoal: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  decreaseconsumed = () => {
    this.setState({ consumedgoal: this.state.consumedgoal - 1 });
  };

  increaseconsumed = () => {
    this.setState({ consumedgoal: this.state.consumedgoal + 1 });
  };

  decreaseburnt = () => {
    this.setState({ burntgoal: this.state.burntgoal - 1 });
  };

  increaseburnt = () => {
    this.setState({ burntgoal: this.state.burntgoal + 1 });
  };

  onSubmit(e) {
    e.preventDefault();
    const progressData = {
      consumedgoal: this.state.consumedgoal,
      burntgoal: this.state.burntgoal
    };
    this.props.createProgress(progressData, this.props.history);
  }
  render() {
    return (
      <div>
        <div className="mini-nav">
          <Link to="/layout/progress">
            <img alt="back" src={backbtn} className="back-btn" />
          </Link>

          <div className="title">edit goal</div>
        </div>
        <div>
          <form onSubmit={this.onSubmit}>
            <div className="slider-line">
              <p className="goal-edit-title">calories consumed</p>
              <div className="slider">
                <div onClick={this.decreaseconsumed} className="slider-btn">
                  <div className="minus" />
                </div>
                <div className="slider-num">
                  <input
                    type="number"
                    name="consumedgoal"
                    value={this.state.consumedgoal}
                    onChange={this.onChange}
                  />
                </div>
                <div
                  onClick={this.increaseconsumed}
                  className="slider-btn plus-btn"
                >
                  <p>+</p>
                </div>
              </div>
            </div>
            <div className="slider-line">
              <p className="goal-edit-title">calories burnt</p>
              <div className="slider">
                <div onClick={this.decreaseburnt} className="slider-btn">
                  <div className="minus" />
                </div>
                <div className="slider-num">
                  <input
                    type="number"
                    name="burntgoal"
                    value={this.state.burntgoal}
                    onChange={this.onChange}
                  />
                </div>
                <div
                  onClick={this.increaseburnt}
                  className="slider-btn plus-btn"
                >
                  <p>+</p>
                </div>
              </div>
            </div>
            <div className="slider-line">
              <button type="submit" className="save-btn save-goal">
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Progress.propTypes = {
  progress: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  progress: state.progress
});

export default connect(
  mapStateToProps,
  { createProgress }
)(withRouter(Progress));
