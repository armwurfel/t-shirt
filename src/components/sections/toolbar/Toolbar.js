import React, { Component } from 'react';
import './toolbar.css';

class Toolbar extends Component {
render() {
return (
<div className="toolbar">
    <div className="btn-group">
        <div class="button">
            <div class="button-icon">
                <svg id="_13-add-text" data-name="13-add-text" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 38.98 38.98">
                    <path class="cls-1"
                        d="M14.77 29.05v-2.54h3v-14h-3.82v4.08h-2.77V9.93H27.8v6.62H25v-4.08h-3.79v14h3v2.54h-9.44z">
                    </path>
                </svg></div>
            <div class="button-text">Add Text</div>
        </div>
        <div class="button">
            <div class="button-icon"><svg id="_08-add-art" data-name="08-add-art"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98">
                    <circle class="cls-1" cx="23.47" cy="15.5" r="1.32"></circle>
                    <path class="cls-1"
                        d="M28.58 9.86H10.4a.54.54 0 0 0-.54.54v18.18a.54.54 0 0 0 .54.54h18.18a.54.54 0 0 0 .54-.54V10.4a.54.54 0 0 0-.54-.54zm-1.46 13l-2.25-2.25a1 1 0 0 0-1.44 0l-1.67 1.67-4.43-4.43a1 1 0 0 0-1.44 0l-4 4V12a.18.18 0 0 1 .11-.14h14.9a.18.18 0 0 1 .18.18v10.82z">
                    </path>
                </svg></div>
            <div class="button-text">Add Art</div>
        </div>
        <div class="button">
            <div class="button-icon"><svg id="_11-upload" data-name="11-upload"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98">
                    <path class="cls-1" d="M19.38 24.81h.22l-.11-.1z"></path>
                    <path class="cls-1"
                        d="M27.91 15.91h-.35v-.53a6.39 6.39 0 0 0-12.22-2.61 3.81 3.81 0 0 0-5.3 2.78 4.71 4.71 0 0 0 1.26 9.24h3.75l.06-.08L18 21.94a2.08 2.08 0 0 1 2.89 0l2.9 2.79.06.08h4a4.45 4.45 0 0 0 .06-8.9z">
                    </path>
                    <path class="cls-1"
                        d="M22.79 25.81L19.9 23a.58.58 0 0 0-.81 0l-2.9 2.79a.58.58 0 0 0 .41 1h1.47V30h2.86v-3.18h1.47a.58.58 0 0 0 .39-1.01z">
                    </path>
                </svg></div>
            <div class="button-text">Upload</div>
        </div>
        <div class="button">
            <div class="button-icon"><svg id="_10-product-color" data-name="10-product-color"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98">
                    <path class="cls-1"
                        d="M25.66 18.83v-.06l-5.31-9a1 1 0 0 0-1.65 0l-5.31 9v.06a7.32 7.32 0 0 0-1 3.62 7.13 7.13 0 1 0 14.26 0 7.32 7.32 0 0 0-.99-3.62zm-6.17 9a5.19 5.19 0 0 1-5-3.88.75.75 0 1 1 1.45-.38 3.69 3.69 0 0 0 3.57 2.76.75.75 0 0 1-.02 1.46z">
                    </path>
                    <path class="cls-1" d="M19.49 29.69z"></path>
                </svg></div>
            <div class="button-text">Product Colors</div>
        </div>
        <div class="button">
            <div class="button-icon"><svg id="_09-names-num" data-name="09-names-num"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98">
                    <path class="cls-1"
                        d="M11.68 11.41l-.08-.09v-.62l.13-.13h.85l.13.12v.42h.82v-.7l-.52-.53h-1.7l-.54.55v1.21l.47.48h1.39l.08.08v.66l-.13.13h-.87l-.13-.12v-.42h-.83v.7l.53.52H13l.54-.54v-1.25l-.47-.47h-1.39z">
                    </path>
                    <path class="cls-1"
                        d="M16.28 12.67l-.84-2.79h-1.13v3.79h.75v-2.49l.76 2.49h.87l.76-2.5v2.5h.81V9.88h-1.13l-.85 2.79z">
                    </path>
                    <path class="cls-1" d="M19.02 10.54h.62v2.48h-.62v.65h2.07v-.65h-.62v-2.48h.62v-.66h-2.07v.66z">
                    </path>
                    <path class="cls-1" d="M21.86 10.6h.99v3.07h.83V10.6h.99v-.72h-2.81v.72z"></path>
                    <path class="cls-1" d="M27.4 9.88v1.54h-1.13V9.88h-.83v3.79h.83v-1.49h1.13v1.49h.83V9.88h-.83z">
                    </path>
                    <path class="cls-1"
                        d="M26.83 29.1h-4.72a.68.68 0 0 1-.48-.2l-1-1a.68.68 0 0 1-.2-.48V16.57a.68.68 0 0 1 .2-.48l1-1a.68.68 0 0 1 .48-.2h4.73a.68.68 0 0 1 .48.2l1 1a.68.68 0 0 1 .2.48v10.85a.68.68 0 0 1-.2.48l-1 1a.68.68 0 0 1-.49.2zm-3.12-2.79h1.51a.5.5 0 0 0 .5-.5v-7.63a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v7.63a.5.5 0 0 0 .5.5z">
                    </path>
                    <path class="cls-1"
                        d="M16.88 29.1h-4.73a.68.68 0 0 1-.48-.2l-1-1a.68.68 0 0 1-.2-.48V16.57a.68.68 0 0 1 .2-.48l1-1a.68.68 0 0 1 .48-.2h4.73a.68.68 0 0 1 .48.2l1 1a.68.68 0 0 1 .2.48v10.85a.68.68 0 0 1-.2.48l-1 1a.68.68 0 0 1-.48.2zm-3.12-2.79h1.51a.5.5 0 0 0 .5-.5v-7.63a.5.5 0 0 0-.5-.5h-1.51a.5.5 0 0 0-.5.5v7.63a.5.5 0 0 0 .5.5z">
                    </path>
                </svg></div>
            <div class="button-text">Add Names</div>
        </div>
        <div class="button">
            <div class="button-icon"><svg id="_21-notes_copy" data-name="21-notes copy"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98">
                    <path class="cls-1" d="M22.92 9.64v2.8h4.04l-4.04-2.8z"></path>
                    <path class="cls-1" d="M28 29.34H11V9.64h10.29v4H28v15.7zm-15-2h13v-11.7h-6.71v-4H13v15.7z"></path>
                    <path class="cls-1" d="M14.15 23.99H22v1.35h-7.85z"></path>
                    <path class="cls-1" d="M14.15 20.77h11.26v1.35H14.15z"></path>
                    <path class="cls-1" d="M14.15 17.54h11.26v1.35H14.15z"></path>
                </svg></div>
            <div class="button-text">Add Notes</div>
        </div>
    </div>
</div>
)
}
}

export default Toolbar