import React, { Component } from 'react';
import CardHeader from '../../../utilitiesComponent/cardHeader/CardHeader';

import './addnotes.css';

class AddNotes extends Component {
    render() {
        return (
            <div className="card">
                 <CardHeader title="Notes" />
                 <form class="form notes">
                     <div class="notes-heading">Leave a note for our production team.</div>
                     <div class="notes-subheading">Your note will be seen when we receive your order.</div>
                     <textarea class="notes-textarea" cols="4" maxlength="4000" name="notes" placeholder="Your note" rows="4" tabindex="1"></textarea>
                     <div class="notes-tools">
                         <button class="cta-primary notes-submit" tabindex="2" type="submit">Save Note</button>
                    </div>
                    <div class="notes-instructions">
                        <div class="notes-instructionsHeader">Use notes to request:</div>
                        <div class="notes-instructionsBody">
                            <div>Special artwork instructions</div>
                            <div>Pantone color matching codes (PMS)</div>
                            <div>Art rotations and touch-ups</div>
                            <div>Sleeve printing</div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddNotes
