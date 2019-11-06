import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Search from '../../../../utilitiesComponent/search/Search';
import ArtCat from '../../../../../../src/artcat.json';
import './subcat.css';

class SubCat extends Component {
    findSubCatById = () => {
        for (var i = 0; i < Object.keys(ArtCat.data[this.props.catId - 1].subcat).length; i++) {
          if (ArtCat.data[this.props.catId - 1].subcat[i].Id === parseInt(this.props.subCatId)) {
            return ArtCat.data[this.props.catId -1].subcat[i].ArtIcons;
          }
       }
    };
    
    render() {
        const subcat = this.findSubCatById();
        return (
            <div className="card">
            <CardHeader back={`/addArt/cat/${this.props.catId}`} title={this.props.subCatTitle} />
            <Search placeholder="Search For Artwork" />
            <div className="artpage">
                <div className="artpage-list-flex-container">
                    <div className="artpage-list-container">
                        <div className="artpage-list-scrolling-container flex-center">
                        {subcat.map( cat => 
                            <span className="clipartlistrow">
                                <li className="artcategorylist-clipartitem"
                                    onClick={()=>{
                                        
                                    }} 
                                >
                                    <img src={`/assets/images/artcat/icons/${cat.ArtIconLink}.png`} alt={cat.ArtIconName} />                            
                                </li>
                            </span>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SubCat
