import React, { Component } from 'react';
import CardHeader from '../../../../utilitiesComponent/cardHeader/CardHeader';
import Search from '../../../../utilitiesComponent/search/Search';
import Fonts from '../../../../../../src/fonts.json';
import './fonts.css';

class fonts extends Component {
    HandleFontChange = (val) => {
        this.props.handleChangeFont(val)
    }

    render() {
        return (
            <div className="card">
                <CardHeader back="/textTools" title="All" />
                <Search placeholder="Search Font" />
                <div className="fontcategoryoverlay-listcontainer">
                    <div className="fontcategory-list">
                        {Fonts.data.map( font => 
                            <div>
                                <div class="fontlistitem"
                                    onClick={() => {this.HandleFontChange(font.Id)}}
                                >
                                    <div class="fontlistitem-font">
                                        <img alt="font" class="foundryimage" draggable="false" src={font.FontPath} />
                                    </div>
                                    <div class="fontlistitem-name">{font.FontName}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default fonts
