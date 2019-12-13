import React, { Component } from 'react';

class CustomTextField extends Component {

    render() {

        const field = this.props.field;

        const UserStyle = {
            width: field.width,
            height: field.height,
            fontSize: field.fontSize,
            backgroundColor: field.backgroundColor,
            borderColor: field.borderColor,
            fontColor: field.fontColor,
            borderWidth: field.borderThickness,
            borderRadius: field.borderRadius,
            borderStyle: 'solid'
        };
        return (
            <input type="text" style={UserStyle} value={field.text}/>
        )
    }
}

export default CustomTextField;