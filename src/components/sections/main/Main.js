import React, { Component } from 'react';
import Toolbar from '../toolbar/Toolbar';
import Default from '../panel/default/Default'

import './main.css';

class Main extends Component {
    render() {
        return (
            <section className="main">
                <div className="content-main">
                    <div className="menu-container">
                        <Toolbar />
                        <div className="panel">
                            <Default />
                        </div>
                    </div>
                    <div className="canvas-container">
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default Main
