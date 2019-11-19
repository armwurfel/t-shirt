import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import history from '../../../history';
import Toolbar from '../toolbar/Toolbar';
import Default from '../panel/default/Default';
import AddText from '../panel/addText/AddText';
import TextTools from '../panel/addText/textTools/TextTools';
import TextColor from '../panel/addText/textColor/TextColor';
import TextOutline from '../panel/addText/textOutline/TextOutline';
import TextShape from '../panel/addText/textShape/TextShape';
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
          artIconId: 223749,
          artColor: 4,
          textRotation: 0,
          iconRotation: 0,
          outlineColor: 1,
          outlineSize: 0,
          shape: 0,
          shapeValue: 0,
          iconActiveStatus: 0,
          iconActiveKey: 0,
          iconActiveType: 0,
          iconCenter: false,
          textCenter: false,
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
      handleArtIconId = (id) => {
        this.setState({artIconId: id});
      }
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
      handleOutlineColor = (value) => {
        this.setState({outlineColor: value})
      }
      handleOutlineSize = (value) => {
        this.setState({outlineSize: value})
      }
      handleShape = (value) => {
        this.setState({shape: value})
      }
      handleShapeValue = (value) => {
        this.setState({shapeValue: value})
      }
      handleIconActive = (status, type, key) => {
        this.setState({iconActiveStatus: status, iconActiveType: type, iconActiveKey: key})
      }
      handleIconCenter = () =>{
        this.setState({iconCenter: true})
      }
      handleTextCenter = () =>{
        this.setState({textCenter: true})
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
                                    component={() => (<TextTools iconActiveKey={this.state.iconActiveKey} iconActiveType={this.state.iconActiveType} textCenter={this.state.textCenter} handleTextCenter={this.handleTextCenter.bind(this)} shape={this.state.shape} outlineSize={this.state.outlineSize} outlineColor={this.state.outlineColor} textRotation={this.state.textRotation} handleTextRotation={this.handleTextRotation.bind(this)} textColor={this.state.textColor} value={this.state.value} font={this.state.font} handleTextFrontValue={this.handleTextFrontValue.bind(this)}  />)}
                                />
                                <Route
                                    path="/textTools/outline"
                                    component={() => (<TextOutline outlineSize={this.state.outlineSize} outlineColor={this.state.outlineColor} handleOutlineColor={this.handleOutlineColor.bind(this)} handleOutlineSize={this.handleOutlineSize.bind(this)} />)}
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
                                    component={() => (<ArtTools iconActiveKey={this.state.iconActiveKey} iconActiveType={this.state.iconActiveType} iconCenter={this.state.iconCenter} handleIconCenter={this.handleIconCenter.bind(this)} iconRotation={this.state.iconRotation} handleIconRotation={this.handleIconRotation.bind(this)} />)}
                                />
                                <Route
                                    path="/artTools/colors"
                                    component={() => (<ArtColor artColor={this.state.artColor} handleArtColor={this.handleArtColor.bind(this)} />)}
                                />
                                <Route
                                    path="/textTools/textEffects"
                                    component={() => (<TextShape shape={this.state.shape} shapeValue={this.state.shapeValue} handleShape={this.handleShape.bind(this)} handleShapeValue={this.handleShapeValue.bind(this)} />)}

                                />
                                <Route
                                    path="/addArt/cat/:id"
                                    component={() => (<Cat catTitle={this.state.catTitle} catId={this.state.catId} handleSubCatTitle={this.handleSubCatTitle.bind(this)} />)}
                                />
                                <Route
                                    path="/addArt/cat/:id/subcat/:id"
                                    component={() => (<SubCat  handleArtIconId={this.handleArtIconId.bind(this)} subCatTitle={this.state.subCatTitle} subCatId={this.state.subCatId} catId={this.state.catId} />)}
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
                            <Design iconCenter={this.state.iconCenter} textCenter={this.state.textCenter} iconActiveStatus={this.state.iconActiveStatus} iconActiveKey={this.state.iconActiveKey} iconActiveType={this.state.iconActiveType} handleIconActive={this.handleIconActive.bind(this)} artIconId={this.state.artIconId} shape={this.state.shape} shapeValue={this.state.shapeValue} outlineSize={this.state.outlineSize} outlineColor={this.state.outlineColor} iconRotation={this.state.iconRotation} textRotation={this.state.textRotation} productColor={this.state.productColor} textColor={this.state.textColor} handleTextFrontValue={this.handleTextFrontValue.bind(this)} font={this.state.font} TextFrontValue={this.state.value} front={this.state.front} back={this.state.back}/>
                            <DesignOption iconActiveStatus={this.state.iconActiveStatus} handleIconActive={this.handleIconActive.bind(this)} productColor={this.state.productColor} handleImageBack={this.handleImageBack.bind(this)} handleImageFront={this.handleImageFront.bind(this)} front={this.state.front} back={this.state.back} />
                        </div>
                    </div>
                </Router>
            </section>
        )
    }
}

export default Main
