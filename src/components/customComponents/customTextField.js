import React, { Component } from 'react';
import {Rnd} from "react-rnd";

class CustomTextField extends Component {


    render() {
        return (
           <div>
               <Rnd
                   default={{
                       width: this.props.field.width,
                       height: this.props.field.height,
                       x: this.props.field.positionX,
                       y: this.props.field.positionY,
                   }}
                   style={{width: this.props.field.width,
                       height: this.props.field.height,
                       fontSize: parseInt(this.props.field.fontSize),
                       backgroundColor: this.props.field.backgroundColor,
                       borderColor: this.props.field.borderColor,
                       fontColor: this.props.field.fontColor,
                       borderWidth: parseInt(this.props.field.borderThickness),
                       borderRadius: parseInt(this.props.field.borderRadius),
                       borderStyle: 'solid',
                       positionX: this.props.field.positionX,
                       positionY: this.props.field.positionY}}
               bounds=".middle-component"
                   onClick={() => {this.props.handleSelectedItem(this.props.field.key)}}
                   onResizeStop={(e, direction, ref, delta, position) => {
                       this.props.field.width = ref.style.width;
                       this.props.field.height = ref.style.height;
                       this.props.handleResize(this.props.field);
                   }}
                   onDragStop={(e, d) => {
                       this.props.field.positionX = d.x;
                       this.props.field.positionY = d.y;
                       this.props.handleResize(this.props.field);
                   }}
               >
                   {this.props.field.text}
               </Rnd>
           </div>

        )
    }
}

export default CustomTextField;