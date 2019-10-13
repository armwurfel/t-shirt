import React, { Component } from 'react';
import CardHeader from '../../../utilitiesComponent/cardHeader/CardHeader';
import Button from '../../../utilitiesComponent/button/CustomButton';

import './addtext.css'

class AddText extends Component {
    render() {
        return (
            <div className="card">
                <CardHeader title="Add Text" />
                <div className="card-content-main">
                    <div className="textcard-container">
                        <div className="textinput">
                            <label class="textinput-textarea-container">
                                <textarea class="textinput-textarea" name="text" placeholder="Enter text here" rows="1" type="text">
                                </textarea>
                            </label>
                            <div className="textinput-tools text-right">
                                <Button text="Add to Design" className="bg-blue txt-white" />
                            </div>
                            <div>
                                <div className="utilitytools">
                                    <div className="utilitytools-row">
                                        <div class="toolsmenu centeringtool">
                                            <div class="toolsmenu-buttons">
                                                <div class="toolsmenubutton isdisabled">
                                                    <svg id="_17-center" data-name="17-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M18.49 10.1h2v18.79h-2z"></path><path class="cls-1" d="M28.37 24.37l-4.88-4.88 4.88-4.88 1.42 1.41-3.47 3.47 3.47 3.47-1.42 1.41z"></path><path class="cls-1" d="M10.61 14.61l4.88 4.88-4.88 4.88-1.41-1.41 3.46-3.47-3.46-3.47 1.41-1.41z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div class="toolsmenu-label">Center</div>
                                        </div>
                                        <div class="toolsmenu layeringtool">
                                            <div class="toolsmenu-buttons">
                                                <div class="toolsmenubutton isdisabled">
                                                    <svg viewBox="11 0 20 21" xmlns="http://www.w3.org/2000/svg"><path d="M29.048 10.754l-8.155 5.132a.684.684 0 0 1-.734 0l-8.154-5.132a.734.734 0 0 1-.34-.627c0-.259.127-.493.34-.627l1.2-.756 6.61 4.159a1.333 1.333 0 0 0 1.423 0l6.609-4.16 1.2.757c.214.134.341.368.341.627a.735.735 0 0 1-.34.627zm0 2.318c.213.134.34.368.34.627a.734.734 0 0 1-.34.627l-8.155 5.131a.683.683 0 0 1-.734 0l-8.154-5.131a.734.734 0 0 1-.34-.627c0-.259.127-.493.34-.627l1.2-.756 6.61 4.159a1.333 1.333 0 0 0 1.423 0l6.609-4.16 1.2.757zm1.005-2.945c0-.502-.247-.956-.66-1.216l-.906-.57.905-.57c.414-.26.66-.715.66-1.216 0-.502-.246-.956-.66-1.216L21.238.207a1.326 1.326 0 0 0-1.423 0L11.66 5.34c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l.905.57-.905.57c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l.905.57-.905.57c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l8.155 5.132a1.333 1.333 0 0 0 1.423 0l8.154-5.132c.414-.26.66-.715.66-1.216 0-.502-.246-.956-.66-1.216l-.905-.57.905-.57c.414-.26.66-.715.66-1.216z" id="Fill-12"></path>
                                                    </svg>
                                                </div>
                                            <div class="toolsmenubutton">
                                                <svg viewBox="13 0 20 21" xmlns="http://www.w3.org/2000/svg"><path d="M31.048 10.754l-8.155 5.132a.684.684 0 0 1-.734 0l-8.154-5.132a.734.734 0 0 1-.34-.627c0-.259.127-.493.34-.627l1.2-.756 6.61 4.159a1.333 1.333 0 0 0 1.423 0l6.609-4.16 1.2.757c.214.134.341.368.341.627a.735.735 0 0 1-.34.627m-17.384-4.2c0-.258.128-.492.34-.626L22.16.796a.687.687 0 0 1 .734 0l8.155 5.132c.213.134.34.368.34.627a.734.734 0 0 1-.34.627l-8.155 5.132a.683.683 0 0 1-.734 0l-8.154-5.132a.734.734 0 0 1-.34-.627m18.388 3.572c0-.502-.247-.956-.66-1.216l-.906-.57.905-.57c.414-.26.66-.715.66-1.216 0-.502-.246-.956-.66-1.216L23.238.207a1.326 1.326 0 0 0-1.423 0L13.66 5.34c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l.905.57-.905.57c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l.905.57-.905.57c-.413.26-.66.714-.66 1.216 0 .501.247.956.66 1.216l8.155 5.132a1.333 1.333 0 0 0 1.423 0l8.154-5.132c.414-.26.66-.715.66-1.216 0-.502-.246-.956-.66-1.216l-.905-.57.905-.57c.414-.26.66-.715.66-1.216" id="Fill-8"></path>
                                                </svg>
                                            </div>
                                        </div>
                                            <div class="toolsmenu-label">Layering</div>
                                        </div>
                                        <div class="toolsmenu alignmenttool">
                                            <div class="toolsmenu-buttons">
                                                <div class="toolsmenubutton isdisabled">
                                                    <svg id="_18-align-left_copy_2" data-name="18-align-left copy 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M10.1 25.88h18.79v2H10.1z"></path><path class="cls-1" d="M10.1 11.1h18.79v2H10.1z"></path><path class="cls-1" d="M10.1 18.49h11.27v2H10.1z"></path>
                                                    </svg>
                                                </div>
                                            <div class="toolsmenubutton isdisabled isActive">
                                                <svg id="_19-align-center_copy" data-name="19-align-center copy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M10.1 25.88h18.79v2H10.1z"></path><path class="cls-1" d="M10.1 11.1h18.79v2H10.1z"></path><path class="cls-1" d="M13.85 18.49h11.27v2H13.85z"></path>
                                                </svg>
                                            </div>
                                            <div class="toolsmenubutton isdisabled">
                                                <svg id="_20-align-right" data-name="20-align-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M10.1 25.88h18.79v2H10.1z"></path><path class="cls-1" d="M10.1 11.1h18.79v2H10.1z"></path><path class="cls-1" d="M17.61 18.49h11.27v2H17.61z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="toolsmenu-label">Text Align</div>
                                    </div>
                                    </div>
                                    <div className="utilitytools-row"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddText
