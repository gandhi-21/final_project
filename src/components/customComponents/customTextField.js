import React, { Component } from 'react';
import {Rnd} from "react-rnd";

class CustomTextField extends Component {

    constructor(props){
        super(props);

        this.state = {
            field : this.props.field,
            UserStyle: {
                width: this.props.field.width,
                height: this.props.field.height,
                fontSize: this.props.field.fontSize,
                backgroundColor: this.props.field.backgroundColor,
                borderColor: this.props.field.borderColor,
                fontColor: this.props.field.fontColor,
                borderWidth: this.props.field.borderThickness,
                borderRadius: this.props.field.borderRadius,
                borderStyle: 'solid',
                positionX: this.props.field.positionX,
                positionY: this.props.field.positionY
            }
        }
    }

    render() {
        return (
           <div>
               <Rnd
                   default={{
                       width: this.state.UserStyle.width,
                       height: this.state.UserStyle.height,
                       x: this.state.UserStyle.positionX,
                       y: this.state.UserStyle.positionY
                   }}
                   style={this.state.UserStyle}>
                   {this.state.field.text}
               </Rnd>

               <button onClick={() => {console.log(this.state)}}>Print Wireframe</button>
           </div>

        )
    }
}

export default CustomTextField;