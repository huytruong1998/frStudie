import React, { Component } from 'react';
import '../../style/style.css';
import thumb from "../../png-elements/thumb-demo.png";



class Guidance extends Component {



    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 sport-guide">
                        <img alt="thumb" src={thumb}></img>
                        <div className="sport-guide-content">
                            <p className="sport-name">running</p>
                            <div className="mins">
                                <p className="min-text">A moderate 5-mph run will burn about 755 calories per hour in a 200-pound person.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 sport-guide">
                        <img alt="thumb" src={thumb}></img>
                        <div className="sport-guide-content">
                            <p className="sport-name">running</p>
                            <div className="mins">
                                <p className="min-text">A moderate 5-mph run will burn about 755 calories per hour in a 200-pound person.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 sport-guide">
                        <img alt="thumb" src={thumb}></img>
                        <div className="sport-guide-content">
                            <p className="sport-name">running</p>
                            <div className="mins">
                                <p className="min-text">A moderate 5-mph run will burn about 755 calories per hour in a 200-pound person.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 sport-guide">
                        <img alt="thumb" src={thumb}></img>
                        <div className="sport-guide-content">
                            <p className="sport-name">running</p>
                            <div className="mins">
                                <p className="min-text">A moderate 5-mph run will burn about 755 calories per hour in a 200-pound person.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Guidance;
