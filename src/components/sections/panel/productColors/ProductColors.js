import React, { Component } from 'react';
import CardHeader from '../../../utilitiesComponent/cardHeader/CardHeader';
import ColorSelection from '../../../utilitiesComponent/colorSelection/ColorSelection';

import './productcolors.css';

class ProductColors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorName: "White",
            colorId: 4
        }
    }
    render() {
        return (
            <div className="card">
                 <CardHeader title="Choose Your Product Color" />
                 <div className="productcolorpicker">
                    <ul class="tabs">
                        <li class="tab isselected">Quantity 1-5</li>
                        <li class="tab">Quantity 6+</li>
                    </ul>
                 </div>
                 <ColorSelection colorName={this.state.colorName} colorId={this.state.colorId} />
            </div>
        )
    }
}

export default ProductColors
