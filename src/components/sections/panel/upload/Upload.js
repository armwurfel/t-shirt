import React, { Component } from 'react';
import CardHeader from '../../../utilitiesComponent/cardHeader/CardHeader';

import './upload.css';

class Upload extends Component {
    render() {
        return (
            <div className="card">
                 <CardHeader title="Upload" />
                 <div className="uploadcard contentcard-content">
                    <div class="uploadcard-title">Choose a file to upload</div>
                    <div>
                        <div class="uploaddropzone"><span class="uploaddropzone-icon">
                            <svg id="_11-upload" data-name="11-upload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.98 38.98"><path class="cls-1" d="M19.38 24.81h.22l-.11-.1z"></path><path class="cls-1" d="M27.91 15.91h-.35v-.53a6.39 6.39 0 0 0-12.22-2.61 3.81 3.81 0 0 0-5.3 2.78 4.71 4.71 0 0 0 1.26 9.24h3.75l.06-.08L18 21.94a2.08 2.08 0 0 1 2.89 0l2.9 2.79.06.08h4a4.45 4.45 0 0 0 .06-8.9z"></path><path class="cls-1" d="M22.79 25.81L19.9 23a.58.58 0 0 0-.81 0l-2.9 2.79a.58.58 0 0 0 .41 1h1.47V30h2.86v-3.18h1.47a.58.58 0 0 0 .39-1.01z"></path></svg>
                            </span>
                            <div class="uploaddropzone-command">Drag &amp; Drop or</div>
                            <div class="uploaddropzone-command">
                                <span class="uploaddropzone-browse">Browse</span> Your Computer
                            </div>
                        </div>
                        <input type="file" style={{position: "absolute", inset: "0px", opacity: "0.00001", pointerEvents: "none"}} autocomplete="off"></input>
                    </div>
                    <div class="uploadfile">
                        <hr class="horizontalrule" />
                        <div class="uploadfile-filedetails">Accepted File Types (Max size: 10mb)
                            <div class="uploadfile-filedetails-list">
                                <div class="uploadfile-filedetails-list-file">.JPG</div>
                                <div class="uploadfile-filedetails-list-file">.JPEG</div>
                                <div class="uploadfile-filedetails-list-file">.PNG</div>
                                <div class="uploadfile-filedetails-list-file">.GIF</div>
                                <div class="uploadfile-filedetails-list-file">.BMP</div>
                                <div class="uploadfile-filedetails-list-file">.PDF</div>
                                <div class="uploadfile-filedetails-list-file">.AI</div>
                                <div class="uploadfile-filedetails-list-file">.PSD</div>
                                <div class="uploadfile-filedetails-list-file">.EPS</div>
                            </div>
                            <span class="uploadfile-filedetails-message">Have a different type of file? <a href="#a" rel="noreferrer noopener" target="_blank">Email it to us</a> and weʼll have it ready for you to use within a few hours!</span>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default Upload
