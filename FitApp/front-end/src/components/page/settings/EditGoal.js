import React, { Component } from "react";
import "../../../style/style.css";
import backbtn from "../../../png-elements/back-btn.png";
import { Link } from "react-router-dom";

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consumed: 0,
      consumedgoal: 0,
      burnt: 0,
      burntgoal: 0,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="mini-nav">
          <Link to="/layout/setting">
            <img alt="back" src={backbtn} className="back-btn" />
          </Link>

          <div className="title">edit goal</div>
        </div>
        <div>
          <div className="slider-line">
            <p className="goal-edit-title">calories consumed</p>
            <div className="slider">
              <div className="slider-btn">
                <div className="minus" />
              </div>
              <div className="slider-num">
                <form>
                  <input
                    type="number"
                    name="consumedgoal"
                    value={this.state.consumedgoal}
                    onChange={this.onChange}
                  />
                </form>
              </div>
              <div className="slider-btn plus-btn">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="slider-line">
            <p className="goal-edit-title">calories burnt</p>
            <div className="slider">
              <div className="slider-btn">
                <div className="minus" />
              </div>
              <div className="slider-num">
                <form>
                  <input
                    type="number"
                    name="burntgoal"
                    value={this.state.burntgoal}
                    onChange={this.onChange}
                  />
                </form>
              </div>
              <div className="slider-btn plus-btn">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="slider-line">
            <button className="save-btn save-goal">save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
