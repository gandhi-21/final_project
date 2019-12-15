import React, { Component } from 'react';
import {Rnd} from 'react-rnd';

class CustomLabel extends Component {

    render() {

        return (
            <Rnd
                default={{
                    width: this.props.label.width,
                    height: this.props.label.height,
                    x: this.props.label.positionX,
                    y: this.props.label.positionY,
                }}
                style={{width: this.props.label.width,
                    height: this.props.label.height,
                    fontSize: parseInt(this.props.label.fontSize),
                    backgroundColor: this.props.label.backgroundColor,
                    borderColor: this.props.label.borderColor,
                    fontColor: this.props.label.fontColor,
                    borderWidth: parseInt(this.props.label.borderThickness),
                    borderRadius: parseInt(this.props.label.borderRadius),
                    borderStyle: 'solid',
                    positionX: this.props.label.positionX,
                    positionY: this.props.label.positionY}}
                bounds=".middle-component"
            onClick={() => {this.props.handleSelectedItem(this.props.label.key)}}
                onResizeStop={(e, direction, ref, delta, position) => {
                    this.props.label.width = ref.style.width;
                    this.props.label.height = ref.style.height;
                    this.props.handleResize(this.props.label);
                }}
                onDragStop={(e, d) => {
                    this.props.label.positionX = d.x;
                    this.props.label.positionY = d.y;
                    this.props.handleResize(this.props.label);
                }}>
                {this.props.label.text}
            </Rnd>
        )

    }
}

export default CustomLabel;