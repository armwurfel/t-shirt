import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import ColorSelection from '../../../../utilitiesComponent/colorSelection/ColorSelection';
import Slider from 'rc-slider';

import './textoutline.css'

class TextOutline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValueOutline: this.props.outlineSize,
            colorName: "Black",
            colorId: 4,
            outlineColor: this.props.outlineColor
        }
    }
    handleValueOutline = (sliderValueOutline) => {
        this.setState({ sliderValueOutline });
    }
    handleOutlineChange = () => {
        this.props.handleOutlineSize(this.state.sliderValueOutline)
    } 
    render() {
        const { sliderValueOutline } = this.state;
        return (
            <div className="card">
                <CardHeader title="Text Outline" back="/textTools" />
                <div className="textoutlinecolorpickerlg-thickness">
                    <p class="textoutlinecolorpickerlg-thicknesstitle">Choose outline thickness</p>
                    <div class="sliderchrome">
                        <div class="sliderchrome-inputwrapper">
                            <Slider dots={true} min={0} max={5} step={1} 
                                defaultValue={sliderValueOutline} 
                                onChange={this.handleValueOutline} 
                                onAfterChange={this.handleOutlineChange } 
                            />
                        </div>
                        <div class="sliderchrome-inputlabels">
                            <div>None</div>
                            <div>Very Thick</div>
                        </div>
                    </div>
                </div>
                <ColorSelection handleOutlineColor={this.props.handleOutlineColor}  colorId={this.state.outlineColor}/>
            </div>
        )
    }
}

export default TextOutline
