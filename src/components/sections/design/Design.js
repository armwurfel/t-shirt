import React, { Component } from 'react';
import DesignIcon from '../design/designIcon/DesignIcon';
import DesignIconImg from '../design/designIconImg/DesignIconImg';
import './design.css'


class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }
    
    render() {
        return (
            <div className="canvas">
                <div>
                    <div className="canvas-zoomcontainer">
                        <div className="product">
                            <div>
                                <span>
                                    {this.props.front === true ? 
                                        <img className="product-photo" src={`./assets/images/product-images/${this.props.productColor}/front_large_extended.png`} alt="product" />
                                    : ""}
                                    {this.props.back === true ? 
                                    <img className="product-photo" src={`./assets/images/product-images/${this.props.productColor}/back_large_extended.png`} alt="product" />
                                    : ""}
                                </span>
                            </div>
                            <div className="canvascontainer-pagecontainer-design">
                                <div className="guideline">
                                    <h5 class="guideline-title">adult</h5>
                                </div>
                                <div className="guideline">
                                    <h5 class="guideline-title">left chest</h5>
                                </div>
                                <div className="guideline">
                                    <h5 class="guideline-title">youth</h5>
                                </div>
                                <div className="design-printablearea">
                                    <div class="design-centerline"></div>
                                    <DesignIcon type="1" keys="1" font={this.props.font} handleTextFrontValue={this.handleTextFrontValue} TextFrontValue={this.props.TextFrontValue}/>
                                    <DesignIconImg type="1" keys="1" font={this.props.font} handleTextFrontValue={this.handleTextFrontValue} TextFrontValue={this.props.TextFrontValue}/>
                                    {/* <DesignIconImg type="2" keys="2" /> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Design
