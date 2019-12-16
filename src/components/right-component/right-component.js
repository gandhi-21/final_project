import React, { Component } from 'react';

import { Row, Col } from 'react-materialize';

class RightComponent extends Component {

    render() {
        return(
            <div>
                <div>Properties</div>
                <div>Text</div>
                <input type="text" ref="Text" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.text : "empty"} onChange={(e) => {
                    if(this.props.currentSelectedItem) {
                        this.props.updatePropertyText(this.refs.Text.value, this.props.currentSelectedItem.key);
                    }
                }}/>
                <br/>
                <div>Font Size</div>
                <input type="number" ref="FontSize" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.fontSize : 0} onChange={(e) => {
                    if(this.props.currentSelectedItem) {
                        this.props.updatePropertyFontSize(this.refs.FontSize.value, this.props.currentSelectedItem.key);
                    }
                }}/>
                <br/>
                <div>Background</div>
                <input type="color" name="backgroundColor" ref="BGColor" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.backgroundColor : "#ff0000"} onChange={(e) => {
                    if(this.props.currentSelectedItem) {
                        this.props.updatePropertyBackgroundColor(this.refs.BGColor.value, this.props.currentSelectedItem.key);
                    }
                }}/>
                <br/>
                <div>Font Color</div>
                <input type="color" name="fontColor" ref="FColor" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.fontColor : "#ff0000"} onChange={(e) => {
                    if(this.props.currentSelectedItem) {
                        this.props.updatePropertyFontColor(this.refs.FColor.value, this.props.currentSelectedItem.key);
                    }
                }}/>
                <br/>
                <div>Border-Color</div>
                <input type="color" name="borderColor" ref="BRColor" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.borderColor : "#ff0000"} onChange={(e) => {
                    if(this.props.currentSelectedItem) {
                        this.props.updatePropertyBorderColor(this.refs.BRColor.value, this.props.currentSelectedItem.key);
                    }
                }}/>
                <br/>
                <div>Border-Thickness</div>
                <input type="number" ref="BT" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.borderThickness : 0} onChange={(e) => {
                    if(this.props.currentSelectedItem) {
                        this.props.updatePropertyBorderThickness(this.refs.BT.value, this.props.currentSelectedItem.key);
                    }
                }}/>
                <br/>
                <div>Border-Radius</div>
                <input type="number" ref="BRR" value={this.props.currentSelectedItem != null ? this.props.currentSelectedItem.borderRadius : 0} onChange={(e) => {
                    if(this.props.currentSelectedItem) {
                        this.props.updatePropertyBorderRadius(this.refs.BRR.value, this.props.currentSelectedItem.key);
                    }
                }}/>

                <div>Wireframe Dimensions</div>
                <br/>
                <div>Wireframe Height</div>
                <input type="number" ref="WHeight" defaultValue={this.props.wireframe != null ? this.props.wireframe.height : 300 } onChange={console.log("ASsa")}/>
                <br/>

                <div>Wireframe Width</div>
                <input type="number"  ref="WWidth" defaultValue={this.props.wireframe != null ? this.props.wireframe.width: 300} onChange={console.log("sdsf")}/>

                <br/>

                <button onClick={() => {
                    this.props.updateHeight(this.refs.WHeight.value);
                    this.props.updateWidth(this.refs.WWidth.value);
                }}>Update Dimensions</button>
            </div>
        );
    }
}

export default RightComponent;