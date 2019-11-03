import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class cardHeader extends Component {
    render() {
        return (
            <div className="card-header">
                <div class="card-back">
                    <div class="btn-back">
                        <Link to={this.props.back ? this.props.back : "/" }><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.4 20.1" ><path d="M10 20.1c-.4 0-.7-.1-1-.4L.4 11c-.3-.2-.4-.6-.4-1s.1-.7.4-1L9 .4c.5-.5 1.4-.5 2 0s.5 1.4 0 2L3.4 10l7.7 7.7c.5.5.5 1.4 0 2-.3.3-.7.4-1.1.4z"></path></svg></Link>
                    </div>
                </div>
                <h5 class="cart-title">{this.props.title}</h5>
                <div class="card-close">
                    <div class="btn-close">
                        <Link to="/"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="Product-Summary---Deskop" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="LBP---Product-Summary---Default" transform="translate(-581 -1193)"><path d="M597.878 1199.97h-8.03v-8.03a.94.94 0 0 0-1.879 0v8.03h-8.03a.94.94 0 0 0 0 1.878h8.03v8.03a.94.94 0 0 0 1.878 0v-8.03h8.03a.94.94 0 0 0 0-1.879z" id="Shape-Copy" transform="rotate(45 588.908 1200.908)"></path></g></g></svg></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default cardHeader
