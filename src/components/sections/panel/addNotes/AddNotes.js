import React, { Component } from 'react';
import CardHeader from '../../../utilitiesComponent/cardHeader/CardHeader';

import './addnotes.css';

class AddNotes extends Component {
    render() {
        return (
            <div className="card">
                 <CardHeader title="Add Notes" />
            </div>
        )
    }
}

export default AddNotes
