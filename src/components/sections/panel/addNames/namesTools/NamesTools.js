import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import './namestools.css';

class NamesTools extends Component {
    render() {
        return (
            <div className="card">
                <CardHeader title="Names and Numbers Tools" back="/namesAndNumbers" />
                <div class="namesandnumberstools-content ContentCard-content">
                    <div>
                        <div class="iconcardtool">
                            <div class="iconcardtool-title">Step 1:</div>
                            <div class="iconcardtool-content">
                                <label class="namesandnumberstools-activator">
                                    <input type="checkbox" value="NAMES" checked="" />Add Names
                                </label>
                                    <label class="namesandnumberstools-activator">
                                        <input type="checkbox" value="NUMBERS" />Add Numbers
                                </label>
                            </div>
                        </div>
                        <div class="iconcardtool toolrow">
                            <div class="iconcardtool-title">Side:</div>
                            <div class="iconcardtool-content">
                                <div class="toolrow-option inactive">
                                    <select>
                                        <option disabled="">back</option>
                                        <option value="1">front</option>
                                        <option value="3">back</option>
                                    </select>
                                </div>
                                <div class="toolrow-option inactive">
                                    <select>
                                        <option disabled="">back</option>
                                        <option value="1">front</option>
                                        <option value="3">back</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="iconcardtool toolrow">
                            <div class="iconcardtool-title">Height:</div>
                            <div class="iconcardtool-content">
                                <div class="toolrow-option inactive">
                                    <select>
                                        <option disabled="">2 in</option>
                                        <option value="1">1 in</option>
                                        <option value="2">2 in</option>
                                    </select>
                                </div>
                                <div class="toolrow-option inactive">
                                    <select>
                                        <option disabled="">8 in</option>
                                        <option value="2">2 in</option>
                                        <option value="4">4 in</option>
                                        <option value="6">6 in</option>
                                        <option value="8">8 in</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="iconcardtool toolrow">
                            <div class="iconcardtool-title">Color:</div>
                            <div class="iconcardtool-content">
                                <div class="toolrow-option inactive">
                                    <span>
                                        <p>Black</p>
                                        <div class="colorswatch isdisabled" data-label="Black">
                                            <svg viewBox="0 0 10.5 10.5"><defs><mask id="colorswatch-normal-51f5f979-c090-43d7-a4f9-3613b2ad87ea"><path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="colorswatch-dogear-51f5f979-c090-43d7-a4f9-3613b2ad87ea"><path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="colorswatch-dogear-corner-51f5f979-c090-43d7-a4f9-3613b2ad87ea"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5"></path></mask><filter id="colorswatch-dogear-filter-51f5f979-c090-43d7-a4f9-3613b2ad87ea"><feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen"></feBlend></filter></defs><g fill="rgb(0, 0, 0)" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><g mask="url(#colorswatch-normal-51f5f979-c090-43d7-a4f9-3613b2ad87ea)" transform="translate(0.25, 0.25)"><path class="colorswatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="rgb(0, 0, 0)"></path><path class="colorswatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill="rgb(0, 0, 0)"></path><path class="colorswatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="colorswatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#cccccc" stroke-width="0.5"></path></g></g></svg>
                                        </div>
                                    </span>
                                </div>
                                <div class="toolrow-option inactive">
                                    <span>
                                        <p>Black</p>
                                        <div class="colorswatch isdisabled" data-label="Black">
                                            <svg viewBox="0 0 10.5 10.5"><defs><mask id="colorswatch-normal-fc969547-3af7-4b09-9cb2-6cc288046966"><path d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="colorswatch-dogear-fc969547-3af7-4b09-9cb2-6cc288046966"><path d="   M 4 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 4   Z " fill="#ffffff" stroke="0.25"></path></mask><mask id="colorswatch-dogear-corner-fc969547-3af7-4b09-9cb2-6cc288046966"><path d="   M 4 0   L 4 3   A 1 1 0 0 1 3 4   L 0 4 " fill="#ffffff" stroke-width="0.5"></path></mask><filter id="colorswatch-dogear-filter-fc969547-3af7-4b09-9cb2-6cc288046966"><feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen"></feBlend></filter></defs><g fill="rgb(0, 0, 0)" stroke="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"><g mask="url(#colorswatch-normal-fc969547-3af7-4b09-9cb2-6cc288046966)" transform="translate(0.25, 0.25)"><path class="colorswatch-primary" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="rgb(0, 0, 0)"></path><path class="colorswatch-secondary" d="   M 6.5 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 6.5 10   Z " fill="rgb(0, 0, 0)"></path><path class="colorswatch-inset" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#ffffff" stroke-linejoin="miter" stroke-width="2.5"></path><path class="colorswatch-outline" d="   M 1 0   L 9 0   A 1 1 0 0 1 10 1   L 10 1   L 10 9   A 1 1 0 0 1 9 10   L 9 10   L 1 10   A 1 1 0 0 1 0 9   L 0 9   L 0 1   A 1 1 0 0 1 1 0   Z " fill="none" stroke="#cccccc" stroke-width="0.5"></path></g></g></svg>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div class="namesandnumberstools-footer">
                                <button class="cta-primary namesandnumberstools-button">Step 2: Enter Names/Numbers</button>
                                <div class="namesandnumberstools-pricing">
                                    <p><strong>Full list required for accurate pricing</strong></p>
                                    <p><strong>Names: </strong>$4.50 each item <strong>| Numbers: </strong>$2.50 each item</p>
                                </div>
                            </div>
                            <div class="namesandnumberstools-footer">
                                <ul>
                                    <li>
                                        <p>‘EXAMPLE’ and ‘00’ are sample placeholders.</p>
                                    </li>
                                    <li>
                                        <p>Our artists will expertly place each name/number from your list.</p>
                                    </li>
                                    <li>
                                        <p>Names/numbers may be screen printed or vinyl.</p>
                                    </li>
                                    <li>
                                        <p>To request other fonts for your names, use <a href="#/notes">Add Notes</a>.
                    </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    )
                }
            }
            
            export default NamesTools
