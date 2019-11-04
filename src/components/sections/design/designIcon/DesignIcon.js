import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import history from '../../../../history';
import './designicon.css';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
  };

class DesignIcon extends Component {
    constructor() {
        super();
        this.state = {
          width: 50,
          height: "auto",
          x: 10,
          y: 10,
        };
      }
    
    render() {
        console.log("Props => " + JSON.stringify(this.props))
        return (
            <div 
                onClick={()=>{
                    history.push({
                        pathname: '/textTools'
                    })
                }}
            >
                <Rnd
                    style={style}
                    size={{ width: this.state.width, height: this.state.height }}
                    position={{ x: this.state.x, y: this.state.y }}
                    onDragStop={(e, d) => {
                    this.setState({ x: d.x, y: d.y });
                    }}
                    bounds=".canvascontainer-pagecontainer-design"
                    lockAspectRatio="100%"
                    
                    onResizeStop={(e, direction, ref, delta, position) => {
                    this.setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
                    }}
                >
                    <img class="foundryimage" alt="font" draggable="false" src={`//www.customink.com/text/v1/gen?op[fnt]=Aromatica-Bold&amp;op[ht]=200&amp;op[sf]=13.5&amp;op[txt]=${this.props.TextFrontValue}&amp;op[r]=254&amp;op[g]=254&amp;op[b]=254&amp;op[a]=center&amp;op[ro]=0&amp;op[lr]=false&amp;op[s_r]=0&amp;op[s_g]=0&amp;op[s_b]=0&amp;op[cf]=false&amp;op[ef]=normal&amp;op[efs]=0`} />
                </Rnd>
                
            </div>
        )
    }
}

export default DesignIcon
