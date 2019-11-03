import React, { Component } from 'react';
import './CustomButton.css';
class CustomButton extends Component {
    render() {
        return (
            <button className={this.props.className}>
                {this.props.text}
            </button>
        )
    }
}

export default CustomButton;
