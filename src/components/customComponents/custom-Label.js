import React, { Component } from 'react';
import {Rnd} from 'react-rnd';

class CustomLabel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            label: this.props.label,
            UserStyle : {
                width: this.props.label.width,
                height: this.props.label.height,
                fontSize: this.props.label.fontSize,
                backgroundColor: this.props.label.backgroundColor,
                borderColor: this.props.label.borderColor,
                fontColor: this.props.label.fontColor,
                borderWidth: this.props.label.borderThickness,
                borderRadius: this.props.label.borderRadius,
                borderStyle: 'solid',
                positionX: this.props.label.positionX,
                positionY: this.props.label.positionY
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
                {this.state.label.text}
            </Rnd>
        )

    }
}

export default CustomLabel;