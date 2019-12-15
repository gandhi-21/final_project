import React, { Component } from 'react';
import {Rnd} from "react-rnd";

class CustomButton extends Component {

    constructor(props) {
        super(props);
    }

    showBorders = () => {
      if(this.props.currentSelectedItem === this.props.button){
          return (
              <div>
                  <div className="selected left top"/>
                  <div className="selected right top" />
                  <div className="selected left bottom" />
                  <div className="selected right bottom" />
              </div>
          )
      }
    };

    render() {
        return (
          <Rnd
              default={{
                  width: this.props.button.width,
                  height: this.props.button.height,
                  x: this.props.button.positionX,
                  y: this.props.button.positionY,
              }}
              style={{width: this.props.button.width,
                  height: this.props.button.height,
                  fontSize: parseInt(this.props.button.fontSize),
                  backgroundColor: this.props.button.backgroundColor,
                  borderColor: this.props.button.borderColor,
                  color: this.props.button.fontColor,
                  borderWidth: parseInt(this.props.button.borderThickness),
                  borderRadius: parseInt(this.props.button.borderRadius),
                  borderStyle: 'solid',
                  positionX: this.props.button.positionX,
                  positionY: this.props.button.positionY}}
          bounds=".middle-component"
          onClick={(e) => {this.props.handleSelectedItem(e, this.props.button.key)}}
              onResizeStop={(e, direction, ref, delta, position) => {
                  this.props.button.width = ref.style.width;
                  this.props.button.height = ref.style.height;
                  this.props.handleResize(this.props.button);
              }}
              onDragStop={(e, d) => {
                  this.props.button.positionX = d.x;
                  this.props.button.positionY = d.y;
                  this.props.handleResize(this.props.button);
              }}
            scale={this.props.scale}>
              {this.showBorders()}
              {this.props.button.text}
          </Rnd>
        );
    }
}

export default CustomButton;