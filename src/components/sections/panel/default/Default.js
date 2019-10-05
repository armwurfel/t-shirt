import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './default.css'

class Default extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="container">
                    <h3>How do you want to start?</h3>
                    <div className="btn-groups">
                        <div class="welcome-row">
                            <div class="btn">
                                <Link to="/addText">
                                    <div class="buttonimage"><img src="assets/images/addtext.svg" alt="addtext" /></div>
                                    <div class="buttontext">Add Text</div>
                                </Link>
                            </div>
                            <div class="btn">
                                <Link to="/addArt">
                                    <div class="buttonimage"><img src="assets/images/addart.svg" alt="addart" /></div>
                                    <div class="buttontext">Add Art</div>
                                </Link>
                            </div>
                        </div>
                        <div class="welcome-row">
                            <div class="btn">
                                <Link to="/uploadForm">
                                    <div class="buttonimage"><img src="assets/images/upload.svg" alt="upload" /></div>
                                    <div class="buttontext">Upload</div>
                                </Link>
                            </div>
                            <div class="btn">
                                <Link to="/productCatalog">
                                    <div class="buttonimage"><img src="assets/images/product.svg" alt="product" /></div>
                                    <div class="buttontext">Change Product</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div class="or">or <span class="or-link"><a href="#a">start over</a></span></div>
                </div>
            </div>
        )
    }
}

export default Default
