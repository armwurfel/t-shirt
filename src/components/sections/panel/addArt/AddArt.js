import React, { Component } from 'react';
import CardHeader from '../../../utilitiesComponent/cardHeader/CardHeader';
import Search from '../../../utilitiesComponent/search/Search';
import history from '../../../../history';
import ArtCat from '../../../../../src/artcat.json';

import './addart.css'
class AddArt extends Component {
    render() {
        return (
            <div className="card">
                <CardHeader title="Artwork Categories" />
                <Search placeholder="Search For Artwork" />
                <div className="artpage">
                    <div className="artpage-list-flex-container">
                        <div className="artpage-list-container">
                            <div className="artpage-list-scrolling-container">
                                    {ArtCat.data.map( cat => 
                                        <span className="artcategorylist-row"
                                            onClick={()=>{
                                                history.push({
                                                    pathname: `/addArt/cat/${cat.Id}`
                                                })
                                                this.props.handleCatTitle(cat.Id, cat.ArtCatName)
                                            }} 
                                        >
                                            <div className="artcategorylist-item-root" style={{backgroundImage: `url(/assets/images/artcat/${cat.ArtCatLink}.svg)`}}></div>
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

export default AddArt
