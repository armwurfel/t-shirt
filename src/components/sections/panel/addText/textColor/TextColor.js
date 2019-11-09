import React, { Component } from 'react';
import ColorSelection from '../../../../utilitiesComponent/colorSelection/ColorSelection';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';

class TextColor extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorName: "Black",
            colorId: "5"
        }
    }
    render() {
        return (
            <div className="card">
                <CardHeader back="/textTools" title="Font Colors" />
                <ColorSelection colorName={this.state.colorName} colorId={this.state.colorId}/>
            </div>
        )
    }
}

export default TextColor
