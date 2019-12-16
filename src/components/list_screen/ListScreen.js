import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

import ListTrash from './ListTrash.js';

import { Row, Col } from 'react-materialize';

import LeftComponent from "../left-component/left-component";
import RightComponent from "../right-component/right-component";
import MiddleComponent from "../middle-component/middle-component";


// Implement the update dimensions on the wireframe
// Deselect an item

class ListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          wireframe: this.props.wireframe,
          isItemSelected: false,
          currentSelectedItem: null
        };
    }



    handleChange = (e) => {
        const { target } = e;

        this.setState(state => ({
            ...state,
            [target.id]: target.value,
        }));
    };


    handleName = () => {
        let newName = this.refs.Name.value;
        if(newName === '') {
            newName = "New Name";
        }
       this.props.wireframe.name = newName;
        this.setState({wireframe: this.props.wireframe});
    };

    handleSave = () => {
        console.log(this.props.wireframe.id);
        let firestore = this.props.firestore.collection("WireFrames").doc(this.props.wireframe.id).update({
            components: this.state.wireframe.components,
            name: this.state.wireframe.name,
            owner: this.state.wireframe.owner,
            zoomPercent: this.state.wireframe.zoomPercent,
            timestamp: this.props.firestore.FieldValue.serverTimestamp(),
            width: this.state.wireframe.width,
            height: this.state.wireframe.height
        });
        console.log("update the data");
    };
    handleDuplicateComponent = (event) => {
        if (event.key ==="d" && event.ctrlKey) {
            console.log(this.state.currentSelectedItem);
            if(this.state.currentSelectedItem){
                var newItem = {
                    "key": this.props.wireframe.components.length,
                    "type": this.state.currentSelectedItem.type,
                    "width": this.state.currentSelectedItem.width,
                    "height": this.state.currentSelectedItem.height,
                    "positionX": this.state.currentSelectedItem.positionX + 100,
                    "positionY": this.state.currentSelectedItem.positionY + 100,
                    "positionZ": this.state.currentSelectedItem.positionZ,
                    "text": this.state.currentSelectedItem.text,
                    "fontSize": this.state.currentSelectedItem.fontSize,
                    "backgroundColor":this.state.currentSelectedItem.backgroundColor,
                    "borderColor": this.state.currentSelectedItem.borderColor,
                    "fontColor": this.state.currentSelectedItem.fontColor,
                    "borderThickness": this.state.currentSelectedItem.borderThickness,
                    "borderRadius": this.state.currentSelectedItem.borderRadius
                }
                // var newItem = this.state.currentItem
                // newItem.key = this.props.wireFrame.items.length
                this.props.wireframe.components.push(newItem);
                console.log(this.props.wireframe);
                this.setState({wireframe:this.props.wireframe});
                this.setState({currentSelectedItem:newItem});
                console.log(this.state.wireframe)
            }
            event.preventDefault();
        } else if(event.keyCode===8 || event.key==="Backspace") {
          this.handleDeleteComponent(this.state.currentSelectedItem);
          event.preventDefault();
        };
    };

    handleDeleteComponent = (event, wireframe) => {
        if(event.keyCode===8 || event.key==="Backspace") {

            console.log(wireframe);

            if(!this.state.currentSelectedItem) {
                return;
            }

            delete wireframe.components[this.state.currentSelectedItem.key];
            let newWireframe = [];
            for(let i=0;i<wireframe.components.length;i++) {
                if(i === this.state.currentSelectedItem){
                    continue;
                }
                newWireframe[i] = wireframe.components[i];
            }

            console.log(wireframe);

            this.setState({wireframe: wireframe, currentSelectedItem: null, isSelected:false});
            event.preventDefault();
        }
    };

    handleNewComponent = (type, key) => {
        var newItem = {
            "type": type,
            "width": 140,
            "height": 50,
            "positionX": 50,
            "positionY": 50,
            "positionZ": 0,
            "text": "New" + type,
            "fontSize": 14,
            "backgroundColor": "#ffffff",
            "borderColor": "#000000",
            "fontColor": "#000000",
            "borderThickness": 2,
            "borderRadius": 2,
            key: key
        };
        this.props.wireframe.components.push(newItem);
        this.setState({wireframe: this.props.wireframe});
    };

    handleResize = (component) => {
        this.props.wireframe.components[component.key] = component;
        this.setState({wireframe: this.props.wireframe});
        console.log(this.state);
    };

    updatePropertyText = (value, key) => {
        this.props.wireframe.components[key].text = value;
        this.setState({wireframe: this.props.wireframe, currentSelectedItem: this.props.wireframe.components[key]});
        console.log(this.state);
    };

    updatePropertyFontSize = (value, key) => {
        this.props.wireframe.components[key].fontSize = value;
        this.setState({wireframe: this.props.wireframe, currentSelectedItem: this.props.wireframe.components[key]});
        console.log(this.state);
    };


    updatePropertyBackgroundColor= (value, key) => {
        this.props.wireframe.components[key].backgroundColor = value;
        this.setState({wireframe: this.props.wireframe, currentSelectedItem: this.props.wireframe.components[key]});
        console.log(this.state);
    };

    updatePropertyBorderColor = (value, key) => {
        this.props.wireframe.components[key].borderColor = value;
        this.setState({wireframe: this.props.wireframe, currentSelectedItem: this.props.wireframe.components[key]});
        console.log(this.state);
    };

    updatePropertyBorderThickness = (value, key) => {
        this.props.wireframe.components[key].borderThickness = value;
        this.setState({wireframe: this.props.wireframe, currentSelectedItem: this.props.wireframe.components[key]});
        console.log(this.state);
    };

    updatePropertyBorderRadius = (value, key) => {
        this.props.wireframe.components[key].borderRadius = value;
        this.setState({wireframe: this.props.wireframe, currentSelectedItem: this.props.wireframe.components[key]});
        console.log(this.state);
    };

    updatePropertyFontColor = (value, key) => {
        this.props.wireframe.components[key].fontColor = value;
        this.setState({wireframe: this.props.wireframe, currentSelectedItem: this.props.wireframe.components[key]});
        console.log(this.state);
    };

    handleSelectedItem = (e, key) => {
        e.stopPropagation();
        var item = this.props.wireframe.components[key];
        this.setState({currentSelectedItem: item, isItemSelected: true});
    };

    updateSelectedItemNull = (e) => {
        // e.stopPropagation();
        this.setState({currentSelectedItem: null, isItemSelected: false});
    };

    zoomIn = () => {
        var number = this.props.wireframe.zoomPercent;
        number = number * 2;
        console.log(number);
        this.props.wireframe.zoomPercent = number;
        this.setState({wireframe: this.props.wireframe})
    };

    zoomOut = () => {
        var number = this.props.wireframe.zoomPercent;
        number = number / 2;
        console.log(number);
        this.props.wireframe.zoomPercent = number;
        this.setState({wireframe: this.props.wireframe});
    };

    updateWireframeHeight = (value) => {
      this.props.wireframe.height = value;
      this.setState({wireframe: this.props.wireframe});
    };

    updateWireframeWidth = (value) => {
        this.props.wireframe.width = value;
        this.setState({wireframe: this.props.wireframe});
    }

    render() {
        const auth = this.props.auth;
        const wireframe = this.props.wireframe;
        if (!auth.uid) {
            return <Redirect to="/" />;
        }
        if(!wireframe) {
            return <Redirect to="/"/>
        }
        return (
            <div className="container">
                <h5 className="grey-text text-darken-3">Wireframe</h5>
                <div className="input-field">
                    <label className="active" for="textarea1">Name</label>
                    <input className="active" type="text" name="name" id="textarea1" ref="Name" onChange={this.handleChange} defaultValue={wireframe.name} onBlur={() => {this.handleName()}}/>
                </div>

                <Row>
                    <Col className="left-component major-component" m={2}>
                        <div>
                            <LeftComponent
                            makeNewComponent={this.handleNewComponent}
                            wireframe={this.state.wireframe}
                            handleSave={this.handleSave}
                            zoomIn={this.zoomIn}
                            zoomOut={this.zoomOut}/>
                        </div>
                    </Col>
                    <Col className="middle-component major-component" m={8} style={{height: this.state.wireframe.height.toString() + "px", width: this.state.wireframe.width.toString() + "px"}}>
                        <div>
                            <MiddleComponent
                            wireframe={this.state.wireframe}
                            updateState={this.updateState}
                            handleSelectedItem={this.handleSelectedItem}
                            handleResize={this.handleResize}
                            currentSelectedItem={this.state.currentSelectedItem}
                            onClick={(e) => this.updateSelectedItemNull(e)}
                            handleDuplicateComponent={this.handleDuplicateComponent}
                            handleDeleteComponent={this.handleDeleteComponent}/>
                        </div>
                    </Col>
                    <Col className="right-component major-component" m={2}>
                        <div >
                            <RightComponent
                            wireframe={this.state.wireframe}
                            currentSelectedItem={this.state.currentSelectedItem}
                            updateState={this.updateState}
                            updatePropertyText={this.updatePropertyText}
                            updatePropertyFontSize={this.updatePropertyFontSize}
                            updatePropertyBackgroundColor={this.updatePropertyBackgroundColor}
                            updatePropertyBorderColor={this.updatePropertyBorderColor}
                            updatePropertyBorderThickness={this.updatePropertyBorderThickness}
                            updatePropertyBorderRadius={this.updatePropertyBorderRadius}
                            updatePropertyFontColor={this.updatePropertyFontColor}
                            scale={this.state.wireframe.zoomPercent}
                            updateHeight={this.updateWireframeHeight}
                            updateWidth={this.updateWireframeWidth}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { WireFrames } = state.firestore.data;
  console.log(state.firestore.data);
  const wireframe = WireFrames ? WireFrames[id] : null;

    if(wireframe)
        wireframe.id = id;

  return {
    wireframe,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'WireFrames'},
  ]),
)(ListScreen);