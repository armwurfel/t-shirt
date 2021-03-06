import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Search from '../../../../utilitiesComponent/search/Search';
import ArtCat from '../../../../../../src/artcat.json';
import history from '../../../../../history';
import './cat.css'

class Cat extends Component {
    
    findCatById = () => {
        for (var i = 0; i < Object.keys(ArtCat.data).length; i++) {
          if (ArtCat.data[i].Id === parseInt(this.props.catId)) {
            return ArtCat.data[i].subcat;
          }
       }
    };
    
    render() {
        const subcat = this.findCatById();
        return (
            <div className="card">
            <CardHeader back="/addArt" title={this.props.catTitle} />
            <Search placeholder="Search For Artwork" />
            <div className="artpage">
                <div className="artpage-list-flex-container">
                    <div className="artpage-list-container">
                        <ul className="artcategorylist-listcontainer">
                        {subcat.map( cat => 
                            <li className="artcategorylist-item"
                                onClick={()=>{
                                    history.push({
                                        pathname: `/addArt/cat/${this.props.catId}/subcat/${cat.Id}`
                                    })
                                    this.props.handleSubCatTitle(cat.Id, cat.ArtSubCatName)
                                }} 
                            >
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
