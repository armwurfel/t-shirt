import React, { Component } from 'react';
import './header.css'
class Header extends Component {
    render() {
        return (
            <header>
                <div className="bg-white d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <div className="px-1">☰</div>
                        <div className="px-1">logo</div>
                    </div>
                    <div className="d-flex">
                        <div className="px-1">left itme</div>
                        <div className="px-1">left itme</div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
