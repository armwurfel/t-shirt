import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Search from '../../../../utilitiesComponent/search/Search';
import ArtCat from '../../../../../../src/artcat.json';
import './subcat.css';

class SubCat extends Component {
    findSubCatById = () => {
        for (var i = 0; i < Object.keys(ArtCat.data).length; i++) {
          if (ArtCat.data[i].Id === parseInt(this.props.subCatId)) {
            return ArtCat.data[i].subcat;
          }
       }
    };
    
    render() {
        const subcat = this.findSubCatById();
        return (
            <div className="card">
            <CardHeader back={`/addArt/cat/${this.props.subCatId}`} title={this.props.subCatTitle} />
            <Search placeholder="Search For Artwork" />
            <div className="artpage">
                <div className="artpage-list-flex-container">
                    <div className="artpage-list-container">
                        <ul className="artcategorylist-listcontainer">
                        {/* {subcat.map( cat => 
                            <li className="artcategorylist-item"
                                onClick={()=>{
                                    
                                }} 
                            >
                                <div class="artcategorylist-item-title">{cat.ArtSubCatName}</div>                            
                            </li>
                        )} */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SubCat
