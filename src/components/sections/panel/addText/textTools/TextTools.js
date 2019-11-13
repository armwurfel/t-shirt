import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Slider from 'rc-slider';
import Fonts from '../../../../../../src/fonts.json';
import Colors from '../../../../../colors.json';
import history from '../../../../../history';

import './texttools.css';

class TextOptions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValueRotation: 0,
            currentFont: 1,
            fontPath: "",
            value: this.props.value,
            textColor: this.props.textColor
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            currentFont: props.font,
            // sliderValueRotation: props.textRotation
        }
    }

    handleValueRotation = (sliderValueRotation) => {
        this.setState({ sliderValueRotation });
    }
    findFontById = (data, idToLookFor) => {
        for (var i = 0; i < Object.keys(data).length; i++) {
          if (data[i].Id === parseInt(idToLookFor)) {
            return data[i].FontPath;
          }
       }
    };
    findColorById = () => {
        for (var i = 0; i < Object.keys(Colors.data).length; i++) {
          if (Colors.data[i].Id === parseInt(this.state.textColor)) {
            return Colors.data[i];
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
        const findColorById = this.findColorById();
        return (
            <div className="card">
                <CardHeader title="Edit Text" />
                <div className="card-content-main">
                    <div className="card-container">
                        <div className="textinput">
                            <label className="textinput-textarea-container">
                                <textarea className="textinput-textarea"
                                 onChange={    
                                    this.handleChangeText
                                } 
                                name="value" value={this.state.value} placeholder="Enter text here" rows="1" type="text">
                                </textarea>
                            </label>
                        </div>
                        <div>
                    <div className="utilitytools">
                        <div className="utilitytools-row">
                            <div className="toolsmenu centeringtool">
                                <div className="toolsmenu-buttons">
                                    <div className="toolsmenubutton isdisabled">
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
                            <div className="toolsmenu alignmenttool">
                                <div className="toolsmenu-buttons">
                                    <div className="toolsmenubutton isdisabled">
                                        <svg id="_18-align-left_copy_2" data-name="18-align-left copy 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path className="cls-1" d="M10.1 25.88h18.79v2H10.1z"></path><path className="cls-1" d="M10.1 11.1h18.79v2H10.1z"></path><path className="cls-1" d="M10.1 18.49h11.27v2H10.1z"></path>
                                        </svg>
                                    </div>
                                <div className="toolsmenubutton isdisabled isactive">
                                    <svg id="_19-align-center_copy" data-name="19-align-center copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path className="cls-1" d="M10.1 25.88h18.79v2H10.1z"></path><path className="cls-1" d="M10.1 11.1h18.79v2H10.1z"></path><path className="cls-1" d="M13.85 18.49h11.27v2H13.85z"></path>
                                    </svg>
                                </div>
                                <div className="toolsmenubutton isdisabled">
                                    <svg id="_20-align-right" data-name="20-align-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path className="cls-1" d="M10.1 25.88h18.79v2H10.1z"></path><path className="cls-1" d="M10.1 11.1h18.79v2H10.1z"></path><path className="cls-1" d="M17.61 18.49h11.27v2H17.61z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="toolsmenu-label">Text Align</div>
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
                                        onChange={
                                            this.handleValueRotation
                                            // this.props.handleTextRotation(this.state.sliderValueRotation)
                                        
                                        } />
                                    <input className="rotationcontrol-value" type="number" value={sliderValueRotation} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/addText/selectFont">
                    <div className="iconcardtool iconcardtool-font iconcardtool-clickable">
                        <div className="iconcardtool-title">Change Font</div>
                        <div className="iconcardtool-content">
                            <img className="foundryimage" alt="font" draggable="false" src={this.findFontById( Fonts.data , this.state.currentFont && this.state.currentFont )} />
                        </div>
                        <div className="iconcardtool-chevron">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.4 20.1" ><path d="M10 20.1c-.4 0-.7-.1-1-.4L.4 11c-.3-.2-.4-.6-.4-1s.1-.7.4-1L9 .4c.5-.5 1.4-.5 2 0s.5 1.4 0 2L3.4 10l7.7 7.7c.5.5.5 1.4 0 2-.3.3-.7.4-1.1.4z"></path>
                            </svg>
                        </div>
                    </div>
                    </Link>
                    <div class="iconcardtool iconcardtool-font-color iconcardtool-clickable"
                        onClick={()=>{
                            history.push({
                                pathname: `/textTools/colors`
                            })
                        }}
                    >
                        <div class="iconcardtool-title">Text Color</div><div class="iconcardtool-content">
                            <div>{findColorById.ColorName}</div>
                            <div class="colorswatch isdisabled isinert" data-label={findColorById.ColorName}>
                                <svg viewBox="0 0 10.5 10.5"><defs><mask id="colorswatch-normal-bedba410-c096-4299-8d14-164d2d2ec70e"><path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="colorswatch-dogear-bedba410-c096-4299-8d14-164d2d2ec70e"><path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="colorswatch-dogear-corner-bedba410-c096-4299-8d14-164d2d2ec70e"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5"></path></mask><filter id="colorswatch-dogear-filter-bedba410-c096-4299-8d14-164d2d2ec70e"><feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen"></feBlend></filter></defs><g fill={`rgb(${findColorById.R}, ${findColorById.G}, ${findColorById.B})`} stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><g mask="url(#colorswatch-normal-bedba410-c096-4299-8d14-164d2d2ec70e)" transform="translate(0.25, 0.25)"><path class="colorswatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill={`rgb(${findColorById.R}, ${findColorById.G}, ${findColorById.B})`}></path><path class="colorswatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill={`rgb(${findColorById.R}, ${findColorById.G}, ${findColorById.B})`}></path><path class="colorswatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="colorswatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#cccccc" stroke-width="0.5"></path></g></g>
                                </svg>
                            </div>
                        </div>
                        <div class="iconcardtool-chevron">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.4 20.1"><path d="M10 20.1c-.4 0-.7-.1-1-.4L.4 11c-.3-.2-.4-.6-.4-1s.1-.7.4-1L9 .4c.5-.5 1.4-.5 2 0s.5 1.4 0 2L3.4 10l7.7 7.7c.5.5.5 1.4 0 2-.3.3-.7.4-1.1.4z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="textoutlinetoggle">
                        <div class="iconcardtool iconcardtool-outline iconcardtool-clickable">
                            <div class="iconcardtool-title">Outline</div>
                            <div class="iconcardtool-content">
                                <span class="iconcardtool-defaultfont">Add Outline</span>
                            </div>
                            <div class="iconcardtool-chevron">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.4 20.1"><path d="M10 20.1c-.4 0-.7-.1-1-.4L.4 11c-.3-.2-.4-.6-.4-1s.1-.7.4-1L9 .4c.5-.5 1.4-.5 2 0s.5 1.4 0 2L3.4 10l7.7 7.7c.5.5.5 1.4 0 2-.3.3-.7.4-1.1.4z"></path>
                                </svg>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div class="iconcardtool iconcardtool-effects iconcardtool-clickable">
                        <div class="iconcardtool-title">Text Shape</div>
                        <div class="iconcardtool-content">
                            <span class="iconcardtool-defaultfont">Add Text Shape</span>
                        </div>
                        <div class="iconcardtool-chevron">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.4 20.1"><path d="M10 20.1c-.4 0-.7-.1-1-.4L.4 11c-.3-.2-.4-.6-.4-1s.1-.7.4-1L9 .4c.5-.5 1.4-.5 2 0s.5 1.4 0 2L3.4 10l7.7 7.7c.5.5.5 1.4 0 2-.3.3-.7.4-1.1.4z"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="iconcardtool">
                        <div class="iconcardtool-title">Font Height</div>
                        <div class="iconcardtool-content">
                            <div class="fontheightform">
                                <div class="fontheightform-inputwrapper" style={{display: "inline-block;"}}>
                                    <input min="0" name="fontheight" step="0.1" type="number" style={{boxSizing: "content-box; width: 63px;"}} value="9.75" />
                                    <div style={{position: "absolute", top: "0px", left: "0px", visibility: "hidden", height: "0px", overflow: "scroll", whiteSpace: "pre", fontSize: "14.4px", fontFamily: "sans-serif", fontWeight: "400", fontStyle: "normal", letterSpacing: "normal", textTransform: "none"}}>9.75</div>
                                </div>
                            </div>
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
