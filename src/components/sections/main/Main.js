import React, { Component } from 'react';
import Toolbar from '../toolbar/Toolbar';

import './main.css';

class Main extends Component {
    render() {
        return (
            <section className="main">
                <div className="menu-container">
                    <Toolbar />
                </div>
                <div className="canvas-container">
                    <div className="panel">
                     
                    </div>
                </div>
            </section>
        )
    }
}

export default Main
