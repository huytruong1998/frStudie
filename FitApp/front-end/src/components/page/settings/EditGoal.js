import React, { Component } from "react";
import "../../../style/style.css";
import backbtn from "../../../png-elements/back-btn.png";
import { Link } from "react-router-dom";

class Progress extends Component {
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
                <p>1500</p>
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
                <p>700</p>
              </div>
              <div className="slider-btn plus-btn">
                <p>+</p>
              </div>
            </div>
          </div>
          <div className="slider-line">
            <button className="save-btn">save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
