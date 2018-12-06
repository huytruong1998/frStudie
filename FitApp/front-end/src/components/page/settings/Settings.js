import React, { Component } from 'react';
import '../../../style/style.css';


class Progress extends Component {



    render() {
        return (
            <div className="choose-layout">
                <div>
                    <div>
                        <button className="main-btn">edit goal</button>
                    </div>
                    <div>
                        <button className="main-btn">edit profile</button>
                    </div>
                    <div>
                        <button className="sign-out">sign out</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Progress;
