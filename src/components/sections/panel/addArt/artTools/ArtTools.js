import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Slider from 'rc-slider';
import history from '../../../../../history';

import './arttools.css';

class TextOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValueRotation: this.props.iconRotation,
            currentFont: 1,
            fontPath: "",
            value: this.props.value,
            singleColor: false,
            iconCenter: this.props.iconCenter,
            iconActiveKey: this.props.iconActiveKey,
            iconActiveType: this.props.iconActiveType,
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            currentFont: props.font,
            iconCenter: props.iconCenter,
            iconActiveKey: props.iconActiveKey,
            iconActiveType: props.iconActiveType
        }
    }

    handleValueRotation = (sliderValueRotation) => {
        this.setState({ sliderValueRotation });
    }
    handleIconRotation = () => {
        this.props.handleIconRotation(this.state.sliderValueRotation)
    } 
    findFontById = (data, idToLookFor) => {
        for (var i = 0; i < Object.keys(data).length; i++) {
          if (data[i].Id === parseInt(idToLookFor)) {
            return data[i].FontPath;
          }
       }
    };
    handleChangeText = (e) => {
        this.setState({
            value: e.target.value
        });
        this.props.handleTextFrontValue(e.target.value)
    }
    render() {
        const { sliderValueRotation } = this.state;
        return (
            <div className="card">
                <CardHeader title="Edit Art" />
                <div className="card-content-main">
                    <div className="card-container">
                    <div>
                    <div className="utilitytools">
                        <div className="utilitytools-row">
                            <div className="toolsmenu centeringtool">
                                <div className="toolsmenu-buttons">
                                    <div className={this.state.iconCenter === true ? "toolsmenubutton isdisabled" : "toolsmenubutton"}
                                            onClick={() => {this.props.handleIconCenter()}}
                                        >
                                        <svg id="_17-center" data-name="17-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path className="cls-1" d="M18.49 10.1h2v18.79h-2z"></path><path className="cls-1" d="M28.37 24.37l-4.88-4.88 4.88-4.88 1.42 1.41-3.47 3.47 3.47 3.47-1.42 1.41z"></path><path className="cls-1" d="M10.61 14.61l4.88 4.88-4.88 4.88-1.41-1.41 3.46-3.47-3.46-3.47 1.41-1.41z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="toolsmenu-label">Center</div>
                            </div>
                            <div className="toolsmenu layeringtool">
                                <div className="toolsmenu-buttons">
                                    <div className="toolsmenubutton isdisabled">
                                        <svg viewBox="11 0 20 21" xmlns="http://www.w3.org/2000/svg"><path d="M29.048 10.754l-8.155 5.132a.684.684 0 0 1-.734 0l-8.154-5.132a.734.734 0 0 1-.34-.627c0-.259.127-.493.34-.627l1.2-.756 6.61 4.159a1.333 1.333 0 0 0 1.423 0l6.609-4.16 1.2.757c.214.134.341.368.341.627a.735.735 0 0 1-.34.627zm0 2.318c.213.134.34.368.34.627a.734.734 0 0 1-.34.627l-8.155 5.131a.683.683 0 0 1-.734 0l-8.154-5.131a.734.734 0 0 1-.34-.627c0-.259.127-.493.34-.627l1.2-.756 6.61 4.159a1.333 1.333 0 0 0 1.423 0l6.609-4.16 1.2.757zm1.005-2.945c0-.502-.247-.956-.66-1.216l-.906-.57.905-.57c.414-.26.66-.715.66-1.216 0-.502-.246-.956-.66-1.216L21.238.207a1.326 1.326 0 0 0-1.423 0L11.66 5.34c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l.905.57-.905.57c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l.905.57-.905.57c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l8.155 5.132a1.333 1.333 0 0 0 1.423 0l8.154-5.132c.414-.26.66-.715.66-1.216 0-.502-.246-.956-.66-1.216l-.905-.57.905-.57c.414-.26.66-.715.66-1.216z" id="Fill-12"></path>
                                        </svg>
                                    </div>
                                <div className="toolsmenubutton">
                                    <svg viewBox="13 0 20 21" xmlns="http://www.w3.org/2000/svg"><path d="M31.048 10.754l-8.155 5.132a.684.684 0 0 1-.734 0l-8.154-5.132a.734.734 0 0 1-.34-.627c0-.259.127-.493.34-.627l1.2-.756 6.61 4.159a1.333 1.333 0 0 0 1.423 0l6.609-4.16 1.2.757c.214.134.341.368.341.627a.735.735 0 0 1-.34.627m-17.384-4.2c0-.258.128-.492.34-.626L22.16.796a.687.687 0 0 1 .734 0l8.155 5.132c.213.134.34.368.34.627a.734.734 0 0 1-.34.627l-8.155 5.132a.683.683 0 0 1-.734 0l-8.154-5.132a.734.734 0 0 1-.34-.627m18.388 3.572c0-.502-.247-.956-.66-1.216l-.906-.57.905-.57c.414-.26.66-.715.66-1.216 0-.502-.246-.956-.66-1.216L23.238.207a1.326 1.326 0 0 0-1.423 0L13.66 5.34c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l.905.57-.905.57c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l.905.57-.905.57c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l8.155 5.132a1.333 1.333 0 0 0 1.423 0l8.154-5.132c.414-.26.66-.715.66-1.216 0-.502-.246-.956-.66-1.216l-.905-.57.905-.57c.414-.26.66-.715.66-1.216" id="Fill-8"></path>
                                    </svg>
                                </div>
                            </div>
                                <div className="toolsmenu-label">Layering</div>
                            </div>
                            <div className="toolsmenu fliptool">
                                <div className="toolsmenu-buttons">
                                    <div className="toolsmenubutton">
                                    <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g stroke="#4A4A4A" stroke-linejoin="round"><path fill="#4A4A4A" class="flipOff" d="M1 3v12l5-6z"></path><path fill="none" class="flipOn" d="M17 3v12l-5-6z"></path></g><g fill="#4A4A4A"><path d="M8.362 10.784h1.275v1.334H8.362z"></path><path d="M8.362 16.118h1.275v1.334H8.362z"></path><path d="M8.362 8.117h1.275v1.334H8.362z"></path><path d="M8.362 13.451h1.275v1.334H8.362z"></path><path d="M8.362 5.449h1.275v1.334H8.362z"></path><path d="M8.362.115h1.275v1.334H8.362z"></path><path d="M8.362 2.782h1.275v1.334H8.362z"></path></g></svg>
                                    </div>
                                <div className="toolsmenubutton">
                                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g stroke="#4A4A4A" stroke-linejoin="round"><path fill="#4A4A4A" class="flipOff" d="M3 1h12L9 6z"></path><path fill="none" class="flipOn" d="M3 17h12l-6-5z"></path></g><g fill="#4A4A4A"><path d="M10.784 8.362h1.334v1.275h-1.334z"></path><path d="M16.118 8.362h1.334v1.275h-1.334z"></path><path d="M8.117 8.362h1.334v1.275H8.117z"></path><path d="M13.451 8.362h1.334v1.275h-1.334z"></path><path d="M5.449 8.362h1.334v1.275H5.449z"></path><path d="M.115 8.362h1.334v1.275H.115z"></path><path d="M2.782 8.362h1.334v1.275H2.782z"></path></g></svg>
                                </div>
                            </div>
                            <div className="toolsmenu-label">Flip</div>
                        </div>
                        </div>
                        <div className="utilitytools-row">
                            <div className="rotationtool">
                                <div className="rotationtool-label">Rotation</div>
                                <div className="rotationcontrol">
                                    <Slider className="slider rotationcontrol-slider" 
                                        min={-180} 
                                        max={180} 
                                        defaultValue={sliderValueRotation}
                                        onChange={this.handleValueRotation}
                                        onAfterChange={this.handleIconRotation}
                                        />
                                    <input className="rotationcontrol-value" type="number" value={sliderValueRotation} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="iconcardtool artsinglecolor iconcardtool-clickable"
                        onClick={() => {
                            this.setState({
                                singleColor: !this.state.singleColor
                            })
                        }}
                    >
                        <div className="iconcardtool-title">Make One Color</div>
                        <div className="iconcardtool-content">
                            <div className={this.state.singleColor === true ? "toggle isactive" : "toggle"}></div>
                        </div>
                    </div>
                    <div class="iconcardtool iconcardtool-font-color iconcardtool-clickable"
                        onClick={() => {
                            history.push({
                                pathname: `${this.state.singleColor === true ? '/artTools/colors' : ''}`
                            })
                        }}
                    >
                        <div class="iconcardtool-title">{this.state.singleColor === true ? "Edit Color" : "Art Colors"}</div><div class="iconcardtool-content">
                            {this.state.singleColor === true ? 
                            <><div>Black</div>
                            <div class="colorswatch isdisabled isinert" data-label="Black">
                                <svg viewBox="0 0 10.5 10.5"><defs><mask id="ColorSwatch-normal-bedba410-c096-4299-8d14-164d2d2ec70e"><path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="ColorSwatch-dogear-bedba410-c096-4299-8d14-164d2d2ec70e"><path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="ColorSwatch-dogear-corner-bedba410-c096-4299-8d14-164d2d2ec70e"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5"></path></mask><filter id="ColorSwatch-dogear-filter-bedba410-c096-4299-8d14-164d2d2ec70e"><feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen"></feBlend></filter></defs><g fill="rgb(0, 0, 0)" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><g mask="url(#ColorSwatch-normal-bedba410-c096-4299-8d14-164d2d2ec70e)" transform="translate(0.25, 0.25)"><path class="ColorSwatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="rgb(0, 0, 0)"></path><path class="ColorSwatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill="rgb(0, 0, 0)"></path><path class="ColorSwatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="ColorSwatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#cccccc" stroke-width="0.5"></path></g></g>
                                </svg>
                            </div></>
                            : 
                            <>
                            <div class="colorswatch isdisabled isinert" data-label="Black">
                                <svg viewBox="0 0 10.5 10.5"><defs><mask id="ColorSwatch-normal-44acd73d-9172-4a60-bab8-b0ada25ee716"><path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="ColorSwatch-dogear-44acd73d-9172-4a60-bab8-b0ada25ee716"><path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="ColorSwatch-dogear-corner-44acd73d-9172-4a60-bab8-b0ada25ee716"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5"></path></mask><filter id="ColorSwatch-dogear-filter-44acd73d-9172-4a60-bab8-b0ada25ee716"><feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen"></feBlend></filter></defs><g fill="rgb(0, 0, 0)" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><g mask="url(#ColorSwatch-normal-44acd73d-9172-4a60-bab8-b0ada25ee716)" transform="translate(0.25, 0.25)"><path class="ColorSwatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="rgb(0, 0, 0)"></path><path class="ColorSwatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill="rgb(0, 0, 0)"></path><path class="ColorSwatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="ColorSwatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#cccccc" stroke-width="0.5"></path></g></g></svg>
                            </div>
                            <div class="colorswatch isdisabled isinert" data-label="Blue">
                                <svg viewBox="0 0 10.5 10.5"><defs><mask id="ColorSwatch-normal-0ba7464f-4070-4948-9867-c1abf565eaa4"><path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="ColorSwatch-dogear-0ba7464f-4070-4948-9867-c1abf565eaa4"><path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="ColorSwatch-dogear-corner-0ba7464f-4070-4948-9867-c1abf565eaa4"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5"></path></mask><filter id="ColorSwatch-dogear-filter-0ba7464f-4070-4948-9867-c1abf565eaa4"><feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen"></feBlend></filter></defs><g fill="rgb(200, 15, 40)" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><g mask="url(#ColorSwatch-normal-0ba7464f-4070-4948-9867-c1abf565eaa4)" transform="translate(0.25, 0.25)"><path class="ColorSwatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="rgb(200, 15, 40)"></path><path class="ColorSwatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill="rgb(200, 15, 40)"></path><path class="ColorSwatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="ColorSwatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="rgb(200, 15, 40)" stroke-width="0.5"></path></g></g></svg>
                            </div>
                            <div class="colorswatch isdisabled isinert" data-label="Gold">
                                <svg viewBox="0 0 10.5 10.5"><defs><mask id="ColorSwatch-normal-be0129b6-bbe6-4631-b337-abe137314462"><path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="ColorSwatch-dogear-be0129b6-bbe6-4631-b337-abe137314462"><path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="ColorSwatch-dogear-corner-be0129b6-bbe6-4631-b337-abe137314462"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5"></path></mask><filter id="ColorSwatch-dogear-filter-be0129b6-bbe6-4631-b337-abe137314462"><feBlend in="SourceGraphic" in2="BackgroundImage" mode="multiply"></feBlend></filter></defs><g fill="rgb(255, 200, 40)" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><g mask="url(#ColorSwatch-normal-be0129b6-bbe6-4631-b337-abe137314462)" transform="translate(0.25, 0.25)"><path class="ColorSwatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="rgb(255, 200, 40)"></path><path class="ColorSwatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill="rgb(255, 200, 40)"></path><path class="ColorSwatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="ColorSwatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="rgb(255, 200, 40)" stroke-width="0.5"></path></g></g></svg>
                            </div>
                            </>
                            }
                            
                        </div>
                        <div class="iconcardtool-chevron">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.4 20.1"><path d="M10 20.1c-.4 0-.7-.1-1-.4L.4 11c-.3-.2-.4-.6-.4-1s.1-.7.4-1L9 .4c.5-.5 1.4-.5 2 0s.5 1.4 0 2L3.4 10l7.7 7.7c.5.5.5 1.4 0 2-.3.3-.7.4-1.1.4z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="textoutlinetoggle">
                        <div class="iconcardtool iconcardtool-outline iconcardtool-clickable"
                            onClick={()=>{
                                history.push({
                                    pathname: `/addArt`
                                })
                            }}
                        >
                            <div class="iconcardtool-title">Change Art</div>
                            <div class="iconcardtool-content">
                                <span class="iconcardtool-defaultfont">Change</span>
                            </div>
                            <div class="iconcardtool-chevron">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.4 20.1"><path d="M10 20.1c-.4 0-.7-.1-1-.4L.4 11c-.3-.2-.4-.6-.4-1s.1-.7.4-1L9 .4c.5-.5 1.4-.5 2 0s.5 1.4 0 2L3.4 10l7.7 7.7c.5.5.5 1.4 0 2-.3.3-.7.4-1.1.4z"></path>
                                </svg>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div class="iconcardtool">
                        <div class="iconcardtool-title">Art Size
                            <div class="iconcardtool-subheader">Width × Height</div>
                        </div>
                        <div class="iconcardtool-content">
                        <form class="iconsizingform">
                            <span class="iconsizingform-padlock">
                                <div class="padlock isactive">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M16 33h32v23H16z" id="body"></path><path d="M46.4 27.6h-5.3v-8c0-4.9-3.4-7.8-9.1-7.8-5.7 0-9.1 2.9-9.1 7.8v14.6h-5.3V19.7C17.6 12.9 24 7.4 32 7.4c7.9 0 14.4 5.5 14.4 12.3v7.9z" id="hinge"></path></svg>
                                </div>
                            </span><div class="iconsizingform-dimensiongroup">
                                <div class="iconsizingform-inputwrapper">
                                    <input id="iconwidth" name="width" step="0.01" type="number" value="5.00" />
                                    <div>5.00
                                    </div>
                                </div>
                            <span class="iconsizingform-units">in</span>
                            <span class="iconsizingform-times">×</span>
                            <div class="iconsizingform-inputwrapper">
                                <input id="iconheight" name="height" step="0.01" type="number" value="5.00" />
                                <div>5.00
                                </div>
                            </div>
                            <span class="iconsizingform-units">in</span>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextOptions
