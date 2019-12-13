import React, { Component } from 'react';
import {Rnd} from 'react-rnd';

class CustomContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {

            container: this.props.container,
            UserStyle: {
                height: this.props.container.height,
                width: this.props.container.width,
                fontSize: this.props.container.fontSize,
                backgroundColor: this.props.container.backgroundColor,
                borderColor: this.props.container.borderColor,
                fontColor: this.props.container.fontColor,
                borderWidth: this.props.container.borderThickness,
                borderRadius: this.props.container.borderRadius,
                borderStyle: 'solid'
            }
        }
    }

    render() {

        return (
            <Rnd
            size={{width: this.props.container.width, height: this.props.container.height}}
            position={{x: this.props.container.positionX, y: this.props.container.positionY}}
            onDragStop={(e, d) => {this.props.container.positionX = d.x; this.props.container.positionY = d.y}}
            onResizeStop={(e, direction, ref, delta, position) => {
                this.props.container.width = ref.style.width;
                this.props.container.height = ref.style.height;
            }}
            style={this.state.UserStyle}
            >
                    {this.state.container.text}
            </Rnd>
        );
    }
}

export default CustomContainer;