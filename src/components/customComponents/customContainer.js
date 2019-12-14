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
                borderStyle: 'solid',
                positionX: this.props.container.positionX,
                positionY: this.props.container.positionY
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
                y: this.state.UserStyle.positionY,
            }}
            style={this.state.UserStyle}
            bounds=".middle-component"
            >
                    {this.state.container.text}
            </Rnd>
        );
    }
}

export default CustomContainer;