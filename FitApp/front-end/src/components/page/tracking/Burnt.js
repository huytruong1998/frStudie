import React, { Component } from "react";
import "../../../style/style.css";
import backbtn from "../../../png-elements/back-btn.png";
import thumb from "../../../png-elements/thumb-demo.png";
import {
  createProgress,
  getCurrentProgress
} from "./../../../actions/progressActions";
import { getCurrentGuide } from "./../../../actions/guideActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Burnt extends Component {
  componentDidMount() {
    this.props.getCurrentProgress();
    this.props.getCurrentGuide();
  }
  constructor(props) {
    super(props);
    this.state = {
      running: 0,
      swimming: 0,
      aerobics: 0,
      jumprope: 0,
      runningupstair: 0,
      kcalformin: {
        running: 22,
        swimming: 10,
        aerobics: 10,
        jumprope: 7,
        runningupstair: 12
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
              <img
                alt="thumb"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/snackers-9ff5b.appspot.com/o/fit-images%2Frunning.png?alt=media&token=87eddaa9-4f15-431b-8238-7306340465e8"
                }
              />
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
              <img
                alt="thumb"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/snackers-9ff5b.appspot.com/o/fit-images%2Fswimming.png?alt=media&token=57e4cc00-8593-405d-8337-d8c9ae322aa3"
                }
              />
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
              <img
                alt="thumb"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/snackers-9ff5b.appspot.com/o/fit-images%2Faerobics.png?alt=media&token=cc9c95da-bc76-4e51-ae41-ffb68b14c29d"
                }
              />
              <div className="sport-desc">
                <p className="sport-name">Aerobics</p>
                <div className="mins">
                  <p className="min-text">Minutes</p>
                  <form>
                    <input
                      className="square-input"
                      type="number"
                      name="aerobics"
                      value={this.state.aerobics}
                      onChange={this.onChange}
                    />
                  </form>
                  <div
                    className="add-btn-short"
                    onClick={() =>
                      this.onSubmit(
                        this.state.aerobics * this.state.kcalformin.aerobics
                      )
                    }
                  >
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 sport">
              <img
                alt="thumb"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/snackers-9ff5b.appspot.com/o/fit-images%2Fjumping.png?alt=media&token=1fd0233d-889c-4ed2-8a2e-14706b671400"
                }
              />
              <div className="sport-desc">
                <p className="sport-name">Jump rope</p>
                <div className="mins">
                  <p className="min-text">Minutes</p>
                  <form>
                    <input
                      className="square-input"
                      type="number"
                      name="jumprope"
                      value={this.state.jumprope}
                      onChange={this.onChange}
                    />
                  </form>
                  <div
                    className="add-btn-short"
                    onClick={() =>
                      this.onSubmit(
                        this.state.jumprope * this.state.kcalformin.jumprope
                      )
                    }
                  >
                    <p>+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 sport">
              <img
                alt="thumb"
                src={
                  "https://firebasestorage.googleapis.com/v0/b/snackers-9ff5b.appspot.com/o/fit-images%2Frunning-up-stair.png?alt=media&token=9d536633-fd39-4a70-9a74-6cfa2db539a6"
                }
              />
              <div className="sport-desc">
                <p className="sport-name">Running up stair</p>
                <div className="mins">
                  <p className="min-text">Minutes</p>
                  <form>
                    <input
                      className="square-input"
                      type="number"
                      name="runningupstair"
                      value={this.state.runningupstair}
                      onChange={this.onChange}
                    />
                  </form>
                  <div
                    className="add-btn-short"
                    onClick={() =>
                      this.onSubmit(
                        this.state.runningupstair *
                          this.state.kcalformin.runningupstair
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
  progress: state.progress,
  guide: state.guide
});

export default connect(
  mapStateToProps,
  { createProgress, getCurrentProgress, getCurrentGuide }
)(Burnt);
