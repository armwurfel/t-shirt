import React, { Component } from 'react';
import Button from '../../utilitiesComponent/button/CustomButton';

import './footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    <Button text="Add Products" />
                    <span> img </span>
                </div>
                <div>
                    <Button text="Get Price" />
                    <Button text="Save | Share" />
                </div>
            </footer>
        )
    }
}

export default Footer
