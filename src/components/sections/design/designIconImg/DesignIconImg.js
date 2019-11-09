import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import history from '../../../../history';
import './designiconimg.css';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
  };

class DesignIconImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
          width: 100,
          height: "auto",
          x: 10,
          y: 10,
        };
      }

    //   findFontById = (data, idToLookFor) => {
    //     for (var i = 0; i < Object.keys(data).length; i++) {
    //       if (data[i].Id === parseInt(idToLookFor)) {
    //         return data[i].FontLinkText;
    //       }
    //    }
    // };
    render() {
        return (
            <div 
                onClick={()=>{
                    history.push({
                        // pathname: `${this.findTypeById(this.state.type)}`
                        pathname: '/artTools'
                    })
                }}
                keys={this.state.keys}
                type={this.state.type}
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
                    {/* <img class="foundryimage" alt="font" draggable="false" src={`//www.customink.com/text/v1/gen?op[fnt]=${this.findFontById( Fonts.data , this.props.font && this.props.font )}&amp;op[ht]=200&amp;op[sf]=13.5&amp;op[txt]=${this.props.TextFrontValue}&amp;op[r]=0&amp;op[g]=0&amp;op[b]=0&amp;op[a]=center&amp;op[ro]=0&amp;op[lr]=false&amp;op[s_r]=0&amp;op[s_g]=0&amp;op[s_b]=0&amp;op[cf]=false&amp;op[ef]=normal&amp;op[efs]=0`} /> */}
                    <img onClick={(event) => {event.preventDefault()}} class="clipartimage" alt="icon" draggable={false} src={`//clipart-transformer.out.customink.com/clipart/manipulate?height=66&amp;width=66&amp;red=0&amp;green=0&amp;blue=0&amp;clipart_id=222863&amp;path=%2Fclipart%2Feps%2F&amp;fV=false&amp;fH=false&amp;lockRatio=true&amp;grayscale=false&amp;blackwhite=false&amp;rotate=0&amp;tag_id=75041&amp;transparent=true`} />
                </Rnd>
                 
            </div>
        )
    }
}

export default DesignIconImg
