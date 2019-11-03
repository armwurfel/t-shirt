import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardHeader from '../../../utilitiesComponent/cardHeader/CardHeader';
import Button from '../../../utilitiesComponent/button/CustomButton';

import 'rc-slider/assets/index.css';
import './addtext.css';


class AddText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }
    handleAddText = (e) => {
        this.setState({
            value: e.target.value
        })
      }
    handleChangeText = (e) => {
        this.setState({
            value: e.target.value
        });
    }
    
    render() {
        return (
            <div className="card">
                <CardHeader title="Add Text" />
                <div className="card-content-main">
                    <div className="textcard-container">
                        <div className="textinput">
                            <label className="textinput-textarea-container">
                                <textarea className="textinput-textarea" onChange={this.handleChangeText} name="value" value={this.state.value && this.state.value ? this.state.value : this.props.value} placeholder="Enter text here" rows="1" type="text">
                                </textarea>
                            </label>
                            <div className="textinput-tools text-right">
                                <Link 
                                    to="textTools"
                                    onClick={() => {
                                            this.props.handleTextFrontValue(this.state.value);
                                        }
                                    } 
                                >
                                    <Button text="Add to Design"
                                        className="bg-blue txt-white" />
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddText
