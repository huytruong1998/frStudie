import React, { Component } from 'react';
import '../../style/style.css';


class NoProgressData extends Component {



    render() {
        return (
            <div>
                <div className="progress-date">
                    <p>thursday 11.09.18</p>
                </div>
                <div className="no-data-line">
                    <p>Goal has not been set</p>
                    <button className="main-btn">set goal</button>
                </div>
            </div>
        );
    }
}

export default NoProgressData;
