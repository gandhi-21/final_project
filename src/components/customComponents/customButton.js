import React, { Component } from 'react';
import {Rnd} from "react-rnd";

class CustomButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            button: this.props.button,
            UserStyle: {
                width: this.props.button.width,
                height: this.props.button.height,
                fontSize: this.props.button.fontSize,
                backgroundColor: this.props.button.backgroundColor,
                borderColor: this.props.button.borderColor,
                fontColor: this.props.button.fontColor,
                borderWidth: this.props.button.borderThickness,
                borderRadius: this.props.button.borderRadius,
                borderStyle: 'solid',
                positionX: this.props.button.positionX,
                positionY: this.props.button.positionY
            }
        }
    }

    render() {
        return (
          <Rnd
              default={{
                  width: this.state.UserStyle.width,
                  height: this.state.UserStyle.height,
                  x: this.state.UserStyle.positionX,
                  y: this.state.UserStyle.positionY
              }}

              style={this.state.UserStyle}>
              {this.state.button.text}
          </Rnd>
        );
    }
}

export default CustomButton;