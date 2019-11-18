import React, { Component } from 'react';
import { Rnd } from 'react-rnd';
import history from '../../../../history';
import Fonts from '../../../../fonts.json';
import Colors from '../../../../colors.json';
import Outline from '../../../../outline.json';
import shapes from '../../../../shapes.json';

import './designicon.css';

const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
    padding: "2px"
    // border: "solid 1px #ddd",
  };

class DesignIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          width: 100,
          height: "auto",
          x: 10,
          y: 10,
          textColor: this.props.textColor,
          outlineSize: this.props.outlineSize,
          outlineColor: this.props.outlineColor,
          shape: this.props.shape,
          shapeValue: this.props.shapeValue,
          active: this.props.iconActiveStatus,
          textCenter: this.props.textCenter
        };
      }
      static getDerivedStateFromProps(props, state) {
        return {
            textColor: props.textColor,
            outlineSize: props.outlineSize,
            outlineColor: props.outlineColor,
            shape: props.shape,
            shapeValue: props.shapeValue,
            active: props.iconActiveStatus,
            textCenter: props.textCenter
        }
    }

    findFontById = (data, idToLookFor) => {
        for (var i = 0; i < Object.keys(data).length; i++) {
        if (data[i].Id === parseInt(idToLookFor)) {
            return data[i].FontLinkText;
        }
    }
    };
    findShapeById = () => {
        for (var i = 0; i < Object.keys(shapes.data).length; i++) {
          if (shapes.data[i].Id === parseInt(this.state.shape)) {
            return shapes.data[i];
          }
       }
    };
    findShapeValueById = () => {
        for (var i = 0; i < Object.keys(shapes.data[this.state.shape].ActiveValue).length; i++) {
          if (shapes.data[this.state.shape].ActiveValue[i].Id === parseInt(this.state.shapeValue)) {
            return shapes.data[this.state.shape].ActiveValue[i].Value;
          }
       }
    };
    findOutlineById = (data, idToLookFor) => {
        for (var i = 0; i < Object.keys(data).length; i++) {
          if (data[i].Id === parseInt(idToLookFor)) {
            return data[i];
          }
       }
    };
    findColorById = (data, idToLookFor) => {
        for (var i = 0; i < Object.keys(data).length; i++) {
          if (data[i].Id === parseInt(idToLookFor)) {
            return data[i];
          }
       }
    };
    render() {
        const HandleClasses = {
          bottomLeft: 'corner-handle bottom-left',
          bottomRight: 'corner-handle bottom-right',
          topLeft: 'corner-handle top-left',
          topRight: 'corner-handle top-right',
          left: 'corner-handle left',
          bottom: 'corner-handle bottom',
          right: 'corner-handle right',
          top: 'corner-handle top',
        };
        const findColorById = this.findColorById(Colors.data, this.state.textColor);
        const findColorOutlineById = this.findOutlineById(Colors.data, this.state.outlineColor);
        const findOutlineById = this.findOutlineById(Outline.data, this.state.outlineSize);
        const findShapeById = this.findShapeById();
        const findShapeValueById = this.findShapeValueById();
        return (
            <div 
                onClick={()=>{
                    history.push({
                        pathname: '/textTools'
                    })
                    this.props.handleIconActive(1, this.props.type, this.props.keys)
                }}
            >
              {/* || this.props.textCenter  === true ? 50 : this.state.x  */}
                <Rnd
                    style={style}
                    size={{ width: this.state.width, height: this.state.height }}
                    position={{ x: this.state.x, y: this.state.y }}
                    onDragStop={(e, d) => {
                    this.setState({ x: d.x, y: d.y });
                    }}
                    bounds=".canvascontainer-pagecontainer-design"
                    className={this.props.iconActiveKey === this.props.keys && this.props.iconActiveType === this.props.type ? "active" : ""}
                    lockAspectRatio="100%"
                    resizeHandleClasses={HandleClasses}
                    onResizeStop={(e, direction, ref, delta, position) => {
                    this.setState({
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position
                    });
                    }}
                >
                    
                    <img class="foundryimage" alt="font" draggable="false" src={`//www.customink.com/text/v1/gen?op[fnt]=${this.findFontById( Fonts.data , this.props.font && this.props.font )}&amp;op[ht]=200&amp;op[sf]=13.5&amp;op[txt]=${this.props.TextFrontValue}&amp;op[r]=${findColorById.R}&amp;op[g]=${findColorById.G}&amp;op[b]=${findColorById.B}&amp;op[a]=center&amp;op[ro]=${this.props.textRotation}&amp;op[lr]=false&amp;op[as]=1&op[st]=${findOutlineById.Value}op[s_r]=${findColorOutlineById.R}&amp;op[s_g]=${findColorOutlineById.G}&amp;op[s_b]=${findColorOutlineById.B}&amp;op[cf]=false&amp;op[ef]=${findShapeById.Effect}&amp;op[efs]=${findShapeValueById}`} />
                    <div className="design-selection">
                    {
                      this.props.iconActiveKey === this.props.keys && this.props.iconActiveType === this.props.type ?
                      <div class="design-selection-handle isdelete">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 17 17" ><circle fill="#FFF" cx="8.5" cy="8.5" r="8.5"></circle><g fill="#4a4a4a"><path d="M11.13 4.97l-6.16 6.16c-.25.25-.25.65 0 .9s.65.25.9 0l6.16-6.16c.25-.25.25-.65 0-.9a.634.634 0 0 0-.9 0"></path><path d="M12.03 11.14L5.86 4.97a.634.634 0 0 0-.9 0c-.25.25-.25.65 0 .9l6.16 6.16c.25.25.65.25.9 0 .26-.24.26-.65.01-.89"></path></g></svg>
                      </div>
                      : "" 
                    }
                    {
                      this.props.iconActiveKey === this.props.keys && this.props.iconActiveType === this.props.type ?
                      <div class="design-selection-handle isresize">
                        <svg version="1.1" id="_00-bounding-scale" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 39 39"><path fill="#039CB5" d="M25.6 19.7v3.8L15.5 13.4h3.7v-3h-8.8v8.8h3v-3.7l10.1 10.1h-3.8v3h8.9v-8.9z"></path></svg>
                      </div>
                      : "" 
                    }
                    </div>
                </Rnd>

                
            </div>
        )
    }
}

export default DesignIcon
