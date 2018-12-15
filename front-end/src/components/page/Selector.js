import React, { Component } from "react";
import Progress from "./../page/Selector";

import Settings from "./../page/settings/Settings";
import EditGoal from "./../page/settings/EditGoal";

import TrackingChoose from "./../page/tracking/TrackingChoose";
import Consumed from "./../page/tracking/Consumed";
import Burnt from "./../page/tracking/Burnt";

class Selector extends Component {
  render() {
    return (
      <div className="col-lg-9 content-wrapper">
        <Consumed />
      </div>
    );
  }
}

export default Selector;
