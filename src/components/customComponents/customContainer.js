import React, { Component } from 'react';
import {Rnd} from 'react-rnd';

class CustomContainer extends Component {
    render() {

        return (
            <Rnd
            default={{
                width: this.props.container.width,
                height: this.props.container.height,
                x: this.props.container.positionX,
                y: this.props.container.positionY,
            }}
            style={{height: this.props.container.height,
                width: this.props.container.width,
                fontSize: parseInt(this.props.container.fontSize),
                backgroundColor: this.props.container.backgroundColor,
                borderColor: this.props.container.borderColor,
                fontColor: this.props.container.fontColor,
                borderWidth: parseInt(this.props.container.borderThickness),
                borderRadius: parseInt(this.props.container.borderRadius),
                borderStyle: 'solid',
                positionX: this.props.container.positionX,
                positionY: this.props.container.positionY}}
            bounds=".middle-component"
            onClick={() => {this.props.handleSelectedItem(this.props.container.key)}}
            onResizeStop={(e, direction, ref, delta, position) => {
                this.props.container.width = ref.style.width;
                this.props.container.height = ref.style.height;
                this.props.handleResize(this.props.container);
            }}
            >
                {this.props.container.text}
            </Rnd>
        );
    }
}

export default CustomContainer;