import React, { Component } from "react";
import "../../../style/style.css";
import backbtn from "../../../png-elements/back-btn.png";
import thumb from "../../../png-elements/thumb-demo.png";
import {
  createProgress,
  getCurrentProgress
} from "./../../../actions/progressActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Burnt extends Component {
  componentDidMount() {
    this.props.getCurrentProgress();
  }
  constructor(props) {
    super(props);
    this.state = {
      running: 0,
      swimming: 0,
      cycling: 0,
      squat: 0,
      kcalformin: {
        running: 22,
        swimming: 10,
        cycling: 10,
        squat: 7
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = value => {
    let number = 0;
    if (this.props.progress.progress.burnt) {
      number = this.props.progress.progress.burnt;
    }
    const progressData = {
      burnt: number + value
    };
    this.props.createProgress(progressData, this.props.history);
  };
  render() {
    return (
      <div>
        <div className="mini-nav">
          <Link to="/layout/tracking">
            <img alt="back" src={backbtn} className="back-btn" />
          </Link>

          <div className="title">calories burnt</div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 sport">
              <img alt="thumb" src={thumb} />
              <div className="sport-desc">
                <p className="sport-name">running</p>
                <form>
                  <div className="mins">
                    <p className="min-text">Minutes</p>

                    <input
                      className="square-input"
                      name="running"
                      type="number"
                      value={this.state.running}
                      onChange={this.onChange}
                    />

                    <div
                      className="add-btn-short"
                      onClick={() =>
                        this.onSubmit(
                          this.state.running * this.state.kcalformin.running
                        )
                      }
                    >
                      <p>+</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-6 sport">
              <img alt="thumb" src={thumb} />
              <div className="sport-desc">
                <p className="sport-name">Swimming</p>
                <div className="mins">
                  <p className="min-text">Minutes</p>
                  <form>
                    <input
                      className="square-input"
                      type="number"
                      name="swimming"
                      value={this.state.swimming}
                      onChange={this.onChange}
                    />
                  </form>
                  <div
                    className="add-btn-short"
                    onClick={() =>
                      this.onSubmit(
                        this.state.swimming * this.state.kcalformin.swimming
                      )
                    }
                  >
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 sport">
              <img alt="thumb" src={thumb} />
              <div className="sport-desc">
                <p className="sport-name">Cycling</p>
                <div className="mins">
                  <p className="min-text">Minutes</p>
                  <form>
                    <input
                      className="square-input"
                      type="number"
                      name="cycling"
                      value={this.state.cycling}
                      onChange={this.onChange}
                    />
                  </form>
                  <div
                    className="add-btn-short"
                    onClick={() =>
                      this.onSubmit(
                        this.state.cycling * this.state.kcalformin.cycling
                      )
                    }
                  >
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 sport">
              <img alt="thumb" src={thumb} />
              <div className="sport-desc">
                <p className="sport-name">squat</p>
                <div className="mins">
                  <p className="min-text">Minutes</p>
                  <form>
                    <input
                      className="square-input"
                      type="number"
                      name="squat"
                      value={this.state.squat}
                      onChange={this.onChange}
                    />
                  </form>
                  <div
                    className="add-btn-short"
                    onClick={() =>
                      this.onSubmit(
                        this.state.squat * this.state.kcalformin.squat
                      )
                    }
                  >
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  progress: state.progress
});

export default connect(
  mapStateToProps,
  { createProgress, getCurrentProgress }
)(Burnt);
