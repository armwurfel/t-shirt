import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import './design.css'

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
  };
class Design extends Component {
    constructor() {
        super();
        this.state = {
          width: 50,
          height: 50,
          x: 10,
          y: 10,
        };
      }
    
    render() {
        return (
            <div className="canvas">
                <div>
                    <div className="canvas-zoomcontainer">
                        <div className="product">
                            <div>
                                <span>
                                    <img className="product-photo" src="./assets/images/front_large_extended.png" alt="product" />
                                </span>
                            </div>
                            <div className="canvascontainer-pagecontainer-design">
                                <div className="guideline">
                                    <h5 class="guideline-title">adult</h5>
                                </div>
                                <div className="guideline">
                                    <h5 class="guideline-title">left chest</h5>
                                </div>
                                <div className="guideline">
                                    <h5 class="guideline-title">youth</h5>
                                </div>
                                <div className="design-printablearea">
                                    <div class="design-centerline"></div>
                                    <Rnd
                                        style={style}
                                        size={{ width: this.state.width, height: this.state.height }}
                                        position={{ x: this.state.x, y: this.state.y }}
                                        onDragStop={(e, d) => {
                                        this.setState({ x: d.x, y: d.y });
                                        }}
                                        bounds=".canvascontainer-pagecontainer-design"
                                        onResizeStop={(e, direction, ref, delta, position) => {
                                        this.setState({
                                            width: ref.style.width,
                                            height: ref.style.height,
                                            ...position
                                        });
                                        }}
                                    >
                                        ARM
                                    </Rnd>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Design
