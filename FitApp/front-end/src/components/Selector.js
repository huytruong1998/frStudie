import React, { Component } from 'react';
import Progress from './page/Progress'

import Schedule from './page/Schedule'

import Settings from './page/settings/Settings';
import EditGoal from './page/settings/EditGoal';
import EditProfile from './page/settings/EditProfile';

import TrackingChoose from './page/tracking/TrackingChoose';
import Consumed from './page/tracking/Consumed';
import Burnt from './page/tracking/Burnt';



class Selector extends Component {
    render() {
        return (
            <div className="col-lg-9 content-wrapper">
                <EditGoal/>
            </div>
        );
    }
}

export default Selector;
