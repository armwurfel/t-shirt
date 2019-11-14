import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Slider from 'rc-slider';
import shapes from '../../../../../shapes.json';

import './textshape.css';

class TextShape extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValueShape: this.props.shapeValue,
            shape: this.props.shape
        }
    }
    findShapeById = () => {
        for (var i = 0; i < Object.keys(shapes.data).length; i++) {
          if (shapes.data[i].Id === parseInt(this.state.shape)) {
            return shapes.data[i];
          }
       }
    };
    handleValueShape = (sliderValueShape) => {
        this.setState({ sliderValueShape });
    }
    handleShapeChange = () => {
        this.props.handleShapeValue(this.state.sliderValueShape)
    } 
    render() {
        const findShapeById = this.findShapeById();
        const { sliderValueShape } = this.state;
        return (
            <div className="card texteffectcard">
                <CardHeader title="Text Shape" back="/textTools" />
                <p class="texteffectcard-header">Choose Text Shape</p>
                <div className="texteffectcard-effectlist">
                    {shapes.data.map( shape =>
                        <div class={ shape.Id === this.state.shape ? "texteffectcard-buttoncontainer isactive" : "texteffectcard-buttoncontainer"} 
                            onClick={() =>{
                                this.props.handleShape(shape.Id)
                                this.props.handleShapeValue(shape.DefaulValue)
                            }}
                        >
                            <div class="texteffectcard-button">
                                <img src=
                                {`../assets/images/textshapes/${shape.Name}.svg`} alt=" "/>
                            </div>
                        </div>
                    )}
                </div>
                <div className={findShapeById.Name === "normal" ? "texteffectcard-slider texteffectcard-slider-disabled" : "texteffectcard-slider" }>
                    <p class="texteffectcard-header">Choose shape settings</p>
                    <div class="sliderchrome">
                        <div class="sliderchrome-inputwrapper">
                            <Slider dots={true} min={findShapeById.MinRange} max={findShapeById.MaxRange} step={1} 
                                defaultValue={sliderValueShape}
                                onChange={this.handleValueShape} 
                                onAfterChange={this.handleShapeChange} 
                            />
                        </div>
                        <div class="sliderchrome-inputlabels">
                            <div>{findShapeById.LeftText}</div>
                            <div>{findShapeById.RightText}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextShape
