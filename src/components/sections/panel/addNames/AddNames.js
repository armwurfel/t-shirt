import React, { Component } from 'react';
import CardHeader from '../../../utilitiesComponent/cardHeader/CardHeader';
import history from '../../../../history';
import './addnames.css'

class AddNames extends Component {
    render() {
        return (
            <div className="card">
                 <CardHeader title="Add Names" />
                 <div className="namesandnumberscard-content">
                    <div class="namesandnumberscard-header">
                        <img class="namesandnumberscard-img" alt="name" src="./assets/images/name.jpg" />
                    </div>
                    <div class="namesandnumberscard-body">
                        <p class="namesandnumberscard-text">Use personalized Names &amp; Numbers for projects like team jerseys where you need a unique name and/or number for each item.</p>
                    </div>
                    <button class="namesandnumberscard-btn"
                    onClick={()=>{
                        history.push({
                            pathname: `/namesAndNumbers/tools`
                        })
                    }}
                    >Add Names and Numbers</button>
                 </div>
            </div>
        )
    }
}

export default AddNames
