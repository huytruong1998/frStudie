import React, { Component } from 'react';
import '../../style/style.css';

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class Progress extends Component {



    render() {
        return (
            <div>
                <div className="progress-date">
                    <p>thursday 11.09.18</p>
                </div>
                <div className="progress-spacing">
                    <div className="title">calories consumed</div>
                    <div className="progress-line goal-line">
                        <p className="goal">goal</p>
                        <div className="bar-max">
                            <div className="bar-pink"></div>
                        </div>
                        <p className="kcal-pink">1500 kcal</p>
                    </div>
                    <div className="progress-line">
                        <p className="orange">consume</p>
                        <div className="bar-max">
                            <div className="bar-orange"></div>
                        </div>
                        <p className="kcal-orange">1200 kcal</p>
                    </div>
                </div>
                <div className="progress-spacing">
                    <div className="title">calories burnt</div>
                    <div className="progress-line goal-line">
                        <p className="goal">goal</p>
                        <div className="bar-max">
                            <div className="bar-pink"></div>
                        </div>
                        <p className="kcal-pink">700 kcal</p>
                    </div>
                    <div className="progress-line burnt-line">
                        <p className="orange">burnt</p>
                        <div className="bar-max">
                            <div className="bar-orange"></div>
                        </div>
                        <p className="kcal-orange">500 kcal</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progress;
