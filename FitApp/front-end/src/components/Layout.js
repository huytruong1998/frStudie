import React, { Component } from 'react';
import NavBar from './NavBar';
import Selector from './Selector';

class Layout extends Component {
    render() {
        return (
            <div className="screen-max-width">
                <div className="container-fluid">
                    <div className="row">
                        <NavBar/>
                        <Selector />
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
