import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Search from '../../../../utilitiesComponent/search/Search';
import ArtCat from '../../../../../../src/artcat.json';

import './cat.css'

class Cat extends Component {
    findCatById = () => {
        for (var i = 0; i < Object.keys(ArtCat.data).length; i++) {
          if (ArtCat.data[i].Id === parseInt(this.props.match.params.id)) {
            return ArtCat.data[i].subcat;
          }
       }
    };
    
    render() {
        const subcat = this.findCatById();
        return (
            <div className="card">
            <CardHeader back="/addArt" title="Emojis" />
            <Search placeholder="Search For Artwork" />
            <div className="artpage">
                <div className="artpage-list-flex-container">
                    <div className="artpage-list-container">
                        <ul className="artcategorylist-listcontainer">
                        {subcat.map( cat => 
                            <li className="artcategorylist-item">
                                <div class="artcategorylist-item-title">{cat.ArtSubCatName}</div>                            
                            </li>
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Cat
