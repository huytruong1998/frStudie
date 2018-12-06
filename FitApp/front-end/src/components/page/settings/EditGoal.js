import React, { Component } from 'react';
import '../../../style/style.css';
import backbtn from "../../../png-elements/back-btn.png";

class EditGoal extends Component {


    render() {
        return (
            <div>
                <div className="mini-nav">
                    <img
                        alt="back"
                        src={backbtn}
                        className="back-btn"
                    ></img>
                    <div className="title">edit goal</div>
                </div>
                <div>
                    <div className="slider-line">
                        <p className="goal-edit-title">calories consumed</p>
                        <div className="slider">
                            <div className="slider-btn">
                                <div className="minus"></div>
                            </div>
                            <div className="slider-num">
                                <form>
                                    <input type="number"/>
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
                                <div className="minus"></div>
                            </div>
                            <div className="slider-num">
                                <form>
                                    <input type="number"/>
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

export default EditGoal;
