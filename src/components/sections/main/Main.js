import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import history from '../../../history';
import Toolbar from '../toolbar/Toolbar';
import Default from '../panel/default/Default';
import AddText from '../panel/addText/AddText';
import TextTools from '../panel/addText/textTools/TextTools';
import Fonts from '../panel/addText/fonts/Fonts';
import AddArt from '../panel/addArt/AddArt';
import AddNames from '../panel/addNames/AddNames';
import Upload from '../panel/upload/Upload';
import ProductColors from '../panel/productColors/ProductColors';
import AddNotes from '../panel/addNotes/AddNotes';
import DesignOption from '../designOption/DesignOption';
import Design from '../design/Design';
import './main.css';

class Main extends Component {
    constructor() {
        super();
        this.state = {
          front: true,
          back: false,
          value: "ARM",
          font: 1
        };
      }
      handleImageFront = (value) => {
        this.setState({front: value});
      };
      handleImageBack = (value) => {
        this.setState({back: value});
      };
      handleTextFrontValue = (text) => {
        this.setState({value: text});
      };
      handleChangeFont = (font) => {
        this.setState({currentFont: font});
      };
    render() {
        return (
            <section className="main">
                <Router history = {history}>
                    <div className="content-main">
                        <div className="menu-container">
                            <Toolbar />
                            <div className="panel">
                                <Route
                                    path="/"
                                    component={Default} 
                                />
                                <Route
                                    path="/addText"
                                    component={() => (<AddText value={this.state.value} handleTextFrontValue={this.handleTextFrontValue.bind(this)} />)}
                                />
                                <Route
                                    path="/textTools"
                                    component={() => (<TextTools value={this.state.value} font={this.state.font} handleTextFrontValue={this.handleTextFrontValue.bind(this)} />)}
                                />
                                <Route
                                    path="/addText/selectFont"
                                    component={() => (<Fonts handleChangeFont={this.handleChangeFont.bind(this)} />)}

                                />
                                <Route
                                    path="/addArt"
                                    component={AddArt} 
                                />
                                <Route
                                    path="/namesAndNumbers"
                                    component={AddNames} 
                                />
                                <Route
                                    path="/uploadForm"
                                    component={Upload} 
                                />
                                <Route
                                    path="/productColors"
                                    component={ProductColors} 
                                />
                                <Route
                                    path="/notes"
                                    component={AddNotes} 
                                />
                            </div>
                        </div>
                        <div className="canvas-container">
                            <Design handleTextFrontValue={this.handleTextFrontValue.bind(this)} TextFrontValue={this.state.value} front={this.state.front} back={this.state.back}/>
                            <DesignOption  handleImageBack={this.handleImageBack.bind(this)} handleImageFront={this.handleImageFront.bind(this)} front={this.state.front} back={this.state.back} />
                        </div>
                    </div>
                </Router>
            </section>
        )
    }
}

export default Main
