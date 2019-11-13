import React, { Component } from 'react';
import ColorSelection from '../../../../utilitiesComponent/colorSelection/ColorSelection';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';

class TextColor extends Component {
    constructor(props){
        super(props);
        this.state = {
            colorName: "Black",
            colorId: this.props.textColor
        }
    }
    render() {
        return (
            <div className="card">
                <CardHeader back="/textTools" title="Font Colors" />
                <ColorSelection handleTextColor={this.props.handleTextColor} colorName={this.state.colorName} colorId={this.state.colorId}/>
            </div>
        )
    }
}

export default TextColor
