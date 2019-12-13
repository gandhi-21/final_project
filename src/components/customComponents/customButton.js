import React, { Component } from 'react';

class CustomButton extends Component {

    render() {

        const button = this.props.button;

        const UserStyle = {
            width: button.width,
            height: button.height,
            fontSize: button.fontSize,
            backgroundColor: button.backgroundColor,
            borderColor: button.borderColor,
            fontColor: button.fontColor,
            borderWidth: button.borderThickness,
            borderRadius: button.borderRadius,
            borderStyle: 'solid'
        };

        return (
          <button type="button" style={UserStyle}>
              {button.text}
          </button>
        );
    }
}

export default CustomButton;