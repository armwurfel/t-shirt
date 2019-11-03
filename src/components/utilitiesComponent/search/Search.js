import React, { Component } from 'react';
import Select, { components } from "react-select";

import './search.css';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
class Search extends Component {
    constructor(){
        super();
        this.state={
            selectedOption: null,
        }
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };

    render() {
        const { selectedOption } = this.state;
        const ValueContainer = ({ children, ...props }) => {
            return (
              components.ValueContainer && (
                <components.ValueContainer {...props}>
                  {!!children && (
                    <div
                        className="search-img"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 173.7 173.7" preserveAspectRatio="xMinYMin"><path fill="#4a4a4a" d="M166.4 144.7l-.5-.5-41.9-41.8c6.1-9.9 9.6-21.6 9.6-34.1 0-36.1-29.3-65.4-65.4-65.4C32.1 2.8 2.8 32.1 2.8 68.2c0 36.1 29.3 65.4 65.4 65.4 12.5 0 24.2-3.5 34.1-9.6l42.3 42.3.1.1.1.1.2.2c6 5.7 15.5 5.6 21.4-.2 6-6.1 6-15.8 0-21.8zm-98.2-29.4c-26 0-47.1-21.1-47.1-47.1s21.1-47.1 47.1-47.1 47.1 21.1 47.1 47.1-21.1 47.1-47.1 47.1z"/></svg>
                    </div>
                  )}
                  {children}
                </components.ValueContainer>
              )
            );
          };
      
        return (
            <div className="search">
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    isSearchable={true}
                    components={{ ValueContainer }}
                    placeholder="Search Fonts"
                    classNamePrefix="search"
                />
            </div>
        )
    }
}

export default Search
