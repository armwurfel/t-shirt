import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Search from '../../../../utilitiesComponent/search/Search';

import './cat.css'

class Cat extends Component {
    render() {
        return (
            <div className="card">
            <CardHeader back="/addArt" title="Emojis" />
            <Search placeholder="Search For Artwork" />
            <div className="artpage">
                <div className="artpage-list-flex-container">
                    <div className="artpage-list-container">
                        <ul className="artcategorylist-listcontainer">
                            <li className="artcategorylist-item">
                                <div class="artcategorylist-item-title">Most Popular</div>                            
                            </li>
                            <li className="artcategorylist-item">
                                <div class="artcategorylist-item-title">Smileys</div>  
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Cat
