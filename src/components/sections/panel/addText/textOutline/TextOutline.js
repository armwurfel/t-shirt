import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import ColorSelection from '../../../../utilitiesComponent/colorSelection/ColorSelection';
import Slider from 'rc-slider';

import './textoutline.css'

class TextOutline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValueOutline: 0,
            colorName: "Black",
            colorId: 4
        }
    }
    handleValueOutline = (sliderValueOutline) => {
        this.setState({ sliderValueOutline });
    }
    render() {
        return (
            <div className="card">
                <CardHeader title="Text Outline" back="/textTools" />
                <div className="textoutlinecolorpickerlg-thickness">
                    <p class="textoutlinecolorpickerlg-thicknesstitle">Choose outline thickness</p>
                    <div class="sliderchrome">
                        <div class="sliderchrome-inputwrapper">
                            <Slider dots step={20} defaultValue={100} />
                        </div>
                        <div class="sliderchrome-inputlabels">
                            <div>None</div>
                            <div>Very Thick</div>
                        </div>
                    </div>
                </div>
                <ColorSelection handleTextColor={this.props.handleTextColor} colorName={this.state.colorName} colorId={this.state.colorId}/>
            </div>
        )
    }
}

export default TextOutline
