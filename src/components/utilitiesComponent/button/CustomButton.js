import React, { Component } from 'react';
import './CustomButton.css';
class CustomButton extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <button>
                {this.props.text}
            </button>
        )
    }
}

export default CustomButton;
