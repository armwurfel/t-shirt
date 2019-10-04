import React, { Component } from 'react';
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
                                <div class="buttonimage"><img src="assets/images/addtext.svg" alt="addtext" /></div>
                                <div class="buttontext">Add Text</div>
                            </div>
                            <div class="btn">
                                <div class="buttonimage"><img src="assets/images/addart.svg" alt="addart" /></div>
                                <div class="buttontext">Add Art</div>
                            </div>
                        </div>
                        <div class="welcome-row">
                            <div class="btn">
                                <div class="buttonimage"><img src="assets/images/upload.svg" alt="upload" /></div>
                                <div class="buttontext">Upload</div>
                            </div>
                            <div class="btn">
                                <div class="buttonimage"><img src="assets/images/product.svg" alt="product" /></div>
                                <div class="buttontext">Change Product</div>
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
