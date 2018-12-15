import React, { Component } from "react";
import "../../../style/style.css";
import { Link } from "react-router-dom";

class TrackingChoose extends Component {
  render() {
    return (
      <div className="choose-layout">
        <div>
          <div>
            <Link to="/layout/burnt">
              <button className="main-btn">calories burnt</button>
            </Link>
          </div>
          <div>
            <Link to="/layout/consume">
              <button className="main-btn">calories consumed</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TrackingChoose;
