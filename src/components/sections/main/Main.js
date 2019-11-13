import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import history from '../../../history';
import Toolbar from '../toolbar/Toolbar';
import Default from '../panel/default/Default';
import AddText from '../panel/addText/AddText';
import TextTools from '../panel/addText/textTools/TextTools';
import TextColor from '../panel/addText/textColor/TextColor';
import ArtColor from '../panel/addArt/artColor/ArtColor';
import Fonts from '../panel/addText/fonts/Fonts';
import AddArt from '../panel/addArt/AddArt';
import ArtTools from '../panel/addArt/artTools/ArtTools';
import Cat from '../panel/addArt/cat/Cat';
import SubCat from '../panel/addArt/subcat/SubCat';
import AddNames from '../panel/addNames/AddNames';
import NamesTools from '../panel/addNames/namesTools/NamesTools';
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
          font: 1,
          catId: 1,
          catTitle: "",
          subCatId: 3,
          subCatTitle: "",
          productColor: 4,
          textColor: 5,
          artColor: 4,
          textRotation: 0,
          iconRotation: 0
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
        this.setState({font: font});
      };
      handleCatTitle = (id, title) => {
        this.setState({catTitle: title, catId: id});
      };
      handleSubCatTitle = (id, title) => {
        this.setState({subCatTitle: title, subCatId: id});
      };
      handleProductColor = (color) => {
        this.setState({productColor: color})
      }
      handleTextColor = (color) => {
        this.setState({textColor: color})
      }
      handleArtColor = (color) => {
        this.setState({artColor: color})
      }
      handleTextRotation = (value) => {
        this.setState({textRotation: value})
      }
      handleIconRotation = (value) => {
        this.setState({iconRotation: value})
      }
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
                                    component={() => (<TextTools textRotation={this.state.textRotation} handleTextRotation={this.handleTextRotation.bind(this)} textColor={this.state.textColor} value={this.state.value} font={this.state.font} handleTextFrontValue={this.handleTextFrontValue.bind(this)} />)}
                                />
                                <Route
                                    path="/textTools/colors"
                                    component={() => (<TextColor textColor={this.state.textColor} handleTextColor={this.handleTextColor.bind(this)} />)}
                                />
                                <Route
                                    path="/addText/selectFont"
                                    component={() => (<Fonts handleChangeFont={this.handleChangeFont.bind(this)} />)}
                                />
                                <Route
                                    path="/addArt"
                                    component={() => (<AddArt handleCatTitle={this.handleCatTitle.bind(this)} />)}
                                />
                                <Route
                                    path="/artTools"
                                    component={() => (<ArtTools iconRotation={this.state.iconRotation} handleIconRotation={this.handleIconRotation.bind(this)} />)}
                                />
                                <Route
                                    path="/artTools/colors"
                                    component={() => (<ArtColor artColor={this.state.artColor} handleArtColor={this.handleArtColor.bind(this)} />)}
                                />
                                <Route
                                    path="/addArt/cat/:id"
                                    component={() => (<Cat catTitle={this.state.catTitle} catId={this.state.catId} handleSubCatTitle={this.handleSubCatTitle.bind(this)} />)}
                                />
                                <Route
                                    path="/addArt/cat/:id/subcat/:id"
                                    component={() => (<SubCat subCatTitle={this.state.subCatTitle} subCatId={this.state.subCatId} catId={this.state.catId} />)}
                                />
                                <Route
                                    path="/namesAndNumbers"
                                    component={AddNames} 
                                />
                                <Route
                                    path="/namesAndNumbers/tools"
                                    component={NamesTools} 
                                />
                                <Route
                                    path="/uploadForm"
                                    component={Upload} 
                                />
                                <Route
                                    path="/productColors"
                                    component={() => (<ProductColors productColor={this.state.productColor} handleProductColor={this.handleProductColor.bind(this)} />)}
                                />
                                <Route
                                    path="/notes"
                                    component={AddNotes} 
                                />
                            </div>
                        </div>
                        <div className="canvas-container">
                            <Design iconRotation={this.state.iconRotation} textRotation={this.state.textRotation} productColor={this.state.productColor} textColor={this.state.textColor} handleTextFrontValue={this.handleTextFrontValue.bind(this)} font={this.state.font} TextFrontValue={this.state.value} front={this.state.front} back={this.state.back}/>
                            <DesignOption productColor={this.state.productColor} handleImageBack={this.handleImageBack.bind(this)} handleImageFront={this.handleImageFront.bind(this)} front={this.state.front} back={this.state.back} />
                        </div>
                    </div>
                </Router>
            </section>
        )
    }
}

export default Main
