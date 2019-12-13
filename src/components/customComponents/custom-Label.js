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
                borderStyle: 'solid'
            }
        }
    }


    render() {

        return (
            <Rnd
                size={{width: this.props.label.width, height: this.props.label.height}}
                position={{x: this.props.label.positionX, y: this.props.label.positionY}}
                onDragStop={(e, d) => {this.props.label.positionX = d.x; this.props.label.positionY = d.y}}
                onResizeStop={(e, direction, ref, delta, position) => {
                    this.props.label.width = ref.style.width;
                    this.props.label.height = ref.style.height;
                }}
                style={this.state.UserStyle}>
                {this.state.label.text}
            </Rnd>
        )

    }
}

export default CustomLabel;