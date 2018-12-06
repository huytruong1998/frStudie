import React, { Component } from 'react';
import '../../../style/style.css';


class TrackingChoose extends Component {



    render() {
        return (
            <div className="choose-layout">
                <div>
                    <div>
                        <button className="main-btn">calories burnt</button>
                    </div>
                    <div>
                        <button className="main-btn">calories consumed</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrackingChoose;
