import React, { Component } from 'react';
import Colors from '../../../colors.json';
import './colorselection.css';

class ColorSelection extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorName: this.props.colorName,
            colorId: this.props.colorId
        }
    }
    findColorById = () => {
        for (var i = 0; i < Object.keys(Colors.data).length; i++) {
          if (Colors.data[i].Id === parseInt(this.state.colorId)) {
            return Colors.data[i];
          }
       }
    };
    render() {
        const findColorById = this.findColorById();
        return (
            <div className="card-content-main">
                <div class="card-container iconcolorpickercard-content">
                    <div className="colorpicker">
                        <div class="colorpicker-title">Select color</div>
                        <div class="colorpicker-selected">
                                <div class="colorpicker-selectedcolor">
                                    <div class="colorswatch isdisabled issmall isinert" data-label={findColorById.colorName}>
                                        <svg viewBox="0 0 10.5 10.5">
                                            <defs>
                                                <mask id="colorswatch-normal-ebd22ca0-c7dd-41a8-81dc-3896846c3164">
                                                    <path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25">
                                                    </path>
                                                </mask>
                                                    <mask id="colorswatch-dogear-ebd22ca0-c7dd-41a8-81dc-3896846c3164">
                                                        <path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25">
                                                        </path>
                                                    </mask>
                                                    <mask id="colorswatch-dogear-corner-ebd22ca0-c7dd-41a8-81dc-3896846c3164">
                                                        <path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5">
                                                        </path>
                                                    </mask>
                                                    <filter id="colorswatch-dogear-filter-ebd22ca0-c7dd-41a8-81dc-3896846c3164">
                                                        <feBlend in="SourceGraphic" in2="BackgroundImage" mode="multiply">
                                                        </feBlend>
                                                    </filter>
                                                </defs>
                                                <g fill={`rgb(${findColorById.R}, ${findColorById.G}, ${findColorById.B})`} stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0">
                                                    <g mask="url(#colorswatch-normal-ebd22ca0-c7dd-41a8-81dc-3896846c3164)" transform="translate(0.25, 0.25)">
                                                        <path class="colorswatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill={`rgb(${findColorById.R}, ${findColorById.G}, ${findColorById.B})`}>
                                                        </path>
                                                        <path class="colorswatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill={`rgb(${findColorById.R}, ${findColorById.G}, ${findColorById.B})`}>
                                                        </path>
                                                        <path class="colorswatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5">
                                                        </path>
                                                        <path class="colorswatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke={`rgb(${findColorById.R}, ${findColorById.G}, ${findColorById.B})`} stroke-width="0.5">
                                                        </path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    <div class="colorpicker-selectedcolorname">{findColorById.ColorName}</div>
                                </div>
                        </div>
                        <div class="colorpicker-colors">
                            <div class="colorswatches">
                                <div class="colorswatches-list iswrapped">
                                    {
                                        Colors.data.map( color => 
                                        <div class="colorswatches-item"
                                            onClick={
                                                () => {
                                                    this.setState({
                                                        colorId: color.Id
                                                    })
                                                }
                                            }
                                        >
                                            <div class="colorswatch" data-label={color.Name}>
                                                <svg viewBox="0 0 10.5 10.5">
                                                    <defs>
                                                        <mask id="colorswatch-normal-f03cd1cf-1e96-4395-8806-834ce49f74cc">
                                                            <path d="  M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25">
                                                            </path>
                                                        </mask>
                                                        <mask id="colorswatch-dogear-f03cd1cf-1e96-4395-8806-834ce49f74cc">
                                                            <path d="  M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z" fill="#ffffff" stroke="0.25">
                                                            </path>
                                                        </mask>
                                                        <mask id="colorswatch-dogear-corner-f03cd1cf-1e96-4395-8806-834ce49f74cc">
                                                            <path d=" M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5">
                                                            </path>
                                                        </mask>
                                                        <filter id="colorswatch-dogear-filter-f03cd1cf-1e96-4395-8806-834ce49f74cc">
                                                            <feBlend in="SourceGraphic" in2="BackgroundImage" mode="multiply">
                                                            </feBlend>
                                                        </filter>
                                                    </defs>
                                                    <g fill={`rgb(${color.R}, ${color.G}, ${color.B})`} stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0">
                                                        <g mask="url(#colorswatch-dogear-f03cd1cf-1e96-4395-8806-834ce49f74cc)" transform="translate(0.25, 0.25)">
                                                            <path class="colorswatch-primary" d="  M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z" fill={`rgb(${color.R}, ${color.G}, ${color.B})`}>
                                                            </path>
                                                            <path class="colorswatch-secondary" d=" M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill={`rgb(${color.R}, ${color.G}, ${color.B})`}>
                                                            </path>
                                                            <path class="colorswatch-inset" d=" M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path>
                                                            <path class="colorswatch-outline" d="  M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#cccccc" stroke-width="0.5">
                                                            </path>
                                                            {
                                                                this.state.colorId === color.Id ? 
                                                                <g transform="scale(0.75) translate(2, 2)">
                                                                    <path class="colorswatch-checkmark" d="  M 2 5.5   L 4 7.5   L 8 3 " fill="none" stroke="#888888" stroke-width="1">
                                                                    </path>
                                                                </g> : ""
                                                            }
                                                        </g>
                                                        {
                                                            this.state.colorId === color.Id ? 
                                                                <g class="colorswatch-dogear" mask="url(#colorswatch-dogear-corner-f03cd1cf-1e96-4395-8806-834ce49f74cc)" transform="translate(0.25, 0.25)">
                                                                    <path d="  M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 ">
                                                                    </path>
                                                                    <path class="colorswatch-inset" d="  M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5">
                                                                    </path>
                                                                    <path class="colorswatch-outline" d="  M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="none" stroke="#cccccc" stroke-width="0.5">
                                                                    </path>
                                                                    <path d="  M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="rgba(0, 0, 0, 0.2)" stroke-width="0.5">
                                                                    </path>
                                                                </g> : <g class="colorswatch-dogear" mask="url(#colorswatch-dogear-corner-f03cd1cf-1e96-4395-8806-834ce49f74cc)" transform="translate(0, 0)">
                                                                    <path d="  M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill={`rgb(${color.R}, ${color.G}, ${color.B})`}>
                                                                    </path>
                                                                    <path class="colorswatch-inset" d="  M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="rgba(0, 0, 0, 0.2)" stroke={`rgb(${color.R}, ${color.G}, ${color.B})`} stroke-linejoin="miter" stroke-width="0">
                                                                    </path>
                                                                    <path class="colorswatch-outline" d="  M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="rgba(0, 0, 0, 0.2)" stroke={`rgb(${color.R}, ${color.G}, ${color.B})`} stroke-width="0">
                                                                    </path>
                                                                    <path d="  M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="rgba(0, 0, 0, 0.2)" stroke-width="0">
                                                                    </path>
                                                                </g>
                                                        }
                                                    </g>
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div class="colorpicker-legend"><div class="colorswatch isdisabled issmall isinert" data-label="">
                            <svg viewBox="0 0 10.5 10.5"><defs><mask id="colorswatch-normal-9e277a37-0251-4f23-b4dc-4fe1b227e728"><path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="colorswatch-dogear-9e277a37-0251-4f23-b4dc-4fe1b227e728"><path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="colorswatch-dogear-corner-9e277a37-0251-4f23-b4dc-4fe1b227e728"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5"></path></mask><filter id="colorswatch-dogear-filter-9e277a37-0251-4f23-b4dc-4fe1b227e728"><feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen"></feBlend></filter></defs><g fill="rgb(100, 106, 105)" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><g mask="url(#colorswatch-dogear-9e277a37-0251-4f23-b4dc-4fe1b227e728)" transform="translate(0.25, 0.25)"><path class="colorswatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="rgb(100, 106, 105)"></path><path class="colorswatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill="rgb(100, 106, 105)"></path><path class="colorswatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="colorswatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="rgb(100, 106, 105)" stroke-width="0.5"></path></g><g class="colorswatch-dogear" mask="url(#colorswatch-dogear-corner-9e277a37-0251-4f23-b4dc-4fe1b227e728)" transform="translate(0.25, 0.25)"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 "></path><path class="colorswatch-inset" d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="colorswatch-outline" d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="none" stroke="rgb(100, 106, 105)" stroke-width="0.5"></path><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="rgba(255, 255, 255, 0.4)" stroke-width="0.5"></path></g></g></svg>
                        </div>Denotes a color already in your design</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorSelection
