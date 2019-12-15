import React, { Component } from 'react';
import {Rnd} from "react-rnd";

class CustomButton extends Component {

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
                  fontColor: this.props.button.fontColor,
                  borderWidth: parseInt(this.props.button.borderThickness),
                  borderRadius: parseInt(this.props.button.borderRadius),
                  borderStyle: 'solid',
                  positionX: this.props.button.positionX,
                  positionY: this.props.button.positionY}}
          bounds=".middle-component"
          onClick={() => {this.props.handleSelectedItem(this.props.button.key)}}>
              {this.props.button.text}
          </Rnd>
        );
    }
}

export default CustomButton;