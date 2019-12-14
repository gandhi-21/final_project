import React, { Component } from 'react';

import { Row, Col } from 'react-materialize';

class RightComponent extends Component {

    render() {
        return(
            <div>
                <div>Properties</div>
                <div>Text Values</div>
                <input type="text" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.text : "empty"}/>
                <div>Font Size</div>
                <input type="number" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.fontSize : 0}/>
                <div>Background</div>
                <input type="color" name="backgroundColor" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.backgroundColor : "#ff0000"}/>
                <div>Border-Color</div>
                <input type="color" name="borderColor" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.borderColor : "#ff0000"}/>
                <div>Border-Thickness</div>
                <input type="number" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.borderThickness : 0}/>
                <div>Border-Radius</div>
                <input type="number" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.borderRadius : 0}/>
            </div>
        );
    }
}

export default RightComponent;