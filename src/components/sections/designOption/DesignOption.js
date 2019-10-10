import React, { Component } from 'react';
import './designoption.css';

class DesignOption extends Component {
    render() {
        return (
            <div>
                <div className="design-option-container">
                    <div className="design-option">
                        <div className="design-option-change-view">
                            <div className="design-menu design-option-menu active">
                                <div className="design-option-changeviewbutton menubutton">

                                </div>
                            </div>
                            <div className="design-menu design-option-menu">
                                <div className="design-option-changeviewbutton menubutton">

                                </div>
                            </div>
                        </div>
                        <div className="design-option-menu"></div>
                        <div className="design-option-zoom"></div>
                    </div>
                    <div className="real-time-price">

                    </div>
                    <div className="redo-undo">

                    </div>
                </div>
            </div>
        )
    }
}

export default DesignOption
