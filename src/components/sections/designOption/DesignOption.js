import React, { Component } from 'react';
import './designoption.css';

class DesignOption extends Component {
    constructor() {
        super();
        this.state = {
          front: true,
          back: false
        };
      }
    render() {
        return (
            <div>
                <div className="design-option-container">
                    <div className="design-option">
                        <div className="design-option-change-view">
                            <div 
                                onClick={() => {
                                    this.props.handleImageFront(true);
                                    this.props.handleImageBack(false);
                                }}
                                className={this.props.front === true ? "design-menu design-option-menu active" : "design-menu design-option-menu"}>
                                <div className="design-option-changeviewbutton menubutton">
                                    <div className="design-option-changeView">
                                        <div>
                                            <img src="/assets/images/front_medium_extended.png" alt="front-img" />
                                        </div>
                                    </div>
                                    <div className="design-option-menubutton-text">
                                        front
                                    </div>
                                </div>
                            </div>
                            <div 
                                onClick={() => {
                                    this.props.handleImageBack(true);
                                    this.props.handleImageFront(false);
                                }}
                                className={this.props.back === true ? "design-menu design-option-menu active" : "design-menu design-option-menu"}>
                                <div className="design-option-changeviewbutton menubutton">
                                    <div className="design-option-changeView">
                                        <div>
                                            <img src="/assets/images/back_medium_extended.png" alt="front-img" />
                                        </div>
                                    </div>
                                    <div className="design-option-menubutton-text">
                                        back
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="design-option-menu">
                            <div className="menubutton printareabutton">
                                <div className="design-option-menubutton-text">
                                    Sleeve Design
                                </div>
                            </div>
                        </div>
                        <div className="design-option-menu design-option-zoom">
                            <div className="menubutton zoombutton">
                                <div className="design-option-menubutton-icon">
                                    <svg id="_14-zoom-plus-NEW" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.1 20.1"><path d="M20.1 19.1l-5.2-5.2.1-.2c2.9-3.6 2.4-8.9-1.3-11.9S4.8-.5 1.9 3.1s-2.4 9 1.2 11.9c3.1 2.5 7.4 2.5 10.5.1l.3-.2 5.1 5.2 1.1-1zM8.4 15.8c-4.1 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3 7.3 3.3 7.3 7.3c0 4.1-3.3 7.3-7.3 7.3z" fill="#231f20"></path><path d="M11.1 8H8.9V5.8h-1V8H5.8v1h2.1v2.1h1V9h2.2z" fill="#231f20"></path></svg>
                                    <svg className="d-none" id="_15-zoom-minus-NEW" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.1 20.1"><path d="M5.8 8h5.3v1H5.8z" fill="#231f20"></path><path d="M20.1 19.1l-5.2-5.2.1-.2c2.9-3.6 2.4-8.9-1.3-11.9S4.8-.5 1.9 3.1s-2.4 9 1.2 11.9c3.1 2.5 7.4 2.5 10.5.1l.3-.2 5.1 5.2 1.1-1zM8.4 15.8c-4.1 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3 7.3 3.3 7.3 7.3c0 4.1-3.3 7.3-7.3 7.3z" fill="#231f20"></path></svg>
                                </div>
                                <div className="design-option-menubutton-text d-none">
                                    Zoom
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="real-time-price">

                    </div>
                    <div className="redo-undo">
                        <div className="redo-undo-tool">
                            <div className="menubutton redo-undo-toolButton inactive">
                                <div className="design-option-menubutton-icon">
                                    <svg viewBox="0 0 19 17" xmlns="http://www.w3.org/2000/svg"><path d="M4.457.662h8.655c3.117 0 5.654 2.63 5.654 5.864 0 3.233-2.537 5.864-5.654 5.864H1.296a.314.314 0 0 1-.308-.32c0-.176.138-.319.308-.319h11.816c2.778 0 5.038-2.344 5.038-5.225S15.89 1.3 13.112 1.3H4.457A.314.314 0 0 1 4.15.98c0-.176.138-.32.308-.32" id="Fill-24"></path><path d="M4.96 7.87c.078 0 .157.03.217.093.12.125.12.327 0 .452L1.652 12.07l3.525 3.655c.12.125.12.327 0 .452a.3.3 0 0 1-.436 0L1 12.296a.328.328 0 0 1 0-.451l3.742-3.882a.301.301 0 0 1 .218-.094" id="Fill-26"></path></svg>
                                </div>
                                <div class="design-option-menubutton-text d-none">Undo</div>
                            </div>
                            <div className="menubutton redo-undo-toolButton inactive">
                                <div className="design-option-menubutton-icon">
                                    <svg viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg"><path d="M14.542 16.272H5.887c-3.117 0-5.654-2.631-5.654-5.865 0-3.233 2.537-5.864 5.654-5.864h11.816c.17 0 .308.143.308.32 0 .176-.138.32-.308.32H5.887C3.11 5.182.85 7.525.85 10.406c0 2.882 2.26 5.226 5.038 5.226h8.655c.17 0 .308.143.308.32 0 .176-.138.319-.308.319" id="Fill-20"></path><path d="M14.04 9.064a.301.301 0 0 1-.218-.094.328.328 0 0 1 0-.452l3.525-3.655-3.525-3.656a.328.328 0 0 1 0-.452.3.3 0 0 1 .436 0L18 4.637c.12.125.12.327 0 .452L14.258 8.97a.301.301 0 0 1-.218.094" id="Fill-22"></path></svg>
                                </div>
                                <div class="design-option-menubutton-text d-none">Redo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesignOption
