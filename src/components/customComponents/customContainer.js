import React, { Component } from 'react';
import {Rnd} from 'react-rnd';

class CustomContainer extends Component {

    showBorders = () => {
        if(this.props.currentSelectedItem === this.props.container){
            return (
                <div>
                    <div className="selected left top"/>
                    <div className="selected right top" />
                    <div className="selected left bottom" />
                    <div className="selected right bottom" />
                </div>
            )
        }
    };

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
                color: this.props.container.fontColor,
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
            onDragStop={(e, d) => {
                this.props.container.positionX = d.x;
                this.props.container.positionY = d.y;
                this.props.handleResize(this.props.container);
            }}
            >
                {this.showBorders()}
                {this.props.container.text}
            </Rnd>
        );
    }
}

export default CustomContainer;