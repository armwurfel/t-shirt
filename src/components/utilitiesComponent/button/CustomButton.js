import React, { Component } from 'react';
import './CustomButton.css';
class CustomButton extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <button className={this.props.className}>
                {this.props.text}
            </button>
        )
    }
}

export default CustomButton;
