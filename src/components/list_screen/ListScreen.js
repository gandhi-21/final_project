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


// Implement the current Selected Item Mechanism -- done
// Implement the border on the current selected item
// Implement the update components on drag, -- done
// Implement the update component on resize -- done
// Implement the update property part of selected item -- done
// Implement the admin functions
// Implement limiting the dragging scope -- done
// Implement Save
// Implement Close -- done
// Implement the Zoom in and Zoom out
// Add key to new items -- done
// Implement the duplicate function
// Implement the delete shortcut function
// Implement the update dimensions on the wireframe
// Implement new wireframe button
class ListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          wireframe: this.props.wireframe,
          isItemSelected: false,
          currentSelectedItem: null
        };
    }

    handleDeleteWireframe = () => {
        let id = this.props.wireframe.id;
        let firestore = this.props.firestore;
        firestore.collection('WireFrames').doc(id).delete();
        return <Redirect to="/" />;
    };

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
        let firestore = this.props.firestore.collection('WireFrames').doc(this.props.wireframe.id).update(
            {name: newName}
        );
    };

    handleSave = () => {
        console.log(this.props.wireframe.id);
        let firestore = this.props.firestore.collection("WireFrames").doc(this.props.wireframe.id).update({
            components: this.state.wireframe.components,
            name: this.state.wireframe.name,
            owner: this.state.wireframe.owner,
            zoomPercent: this.state.wireframe.zoomPercent,
            timestamp: this.props.firestore.FieldValue.serverTimestamp()
        });
        console.log("update the data");
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


    handleSelectedItem = (key) => {
        var item = this.props.wireframe.components[key];
        this.setState({currentSelectedItem: item, isItemSelected: true});
    };

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
            <div className="container ">
                <h5 className="grey-text text-darken-3">Wireframe</h5>
                <div className="input-field">
                    <label className="active" for="textarea1">Name</label>
                    <input className="active" type="text" name="name" id="textarea1" ref="Name" onChange={this.handleChange} defaultValue={wireframe.name} onBlur={() => {this.handleName()}}/>
                </div>

                <div className="container white">
                    <ListTrash
                    deleteList = {this.handleDeleteWireframe}/>
                </div>


                <Row>
                    <Col className="left-component major-component" m={2}> Left Component
                        <div>
                            <LeftComponent
                            makeNewComponent={this.handleNewComponent}
                            wireframe={this.state.wireframe}
                            handleSave={this.handleSave}/>
                        </div>
                    </Col>
                    <Col className="middle-component major-component" m={8}>Middle Component
                        <div>
                            <MiddleComponent
                            wireframe={this.state.wireframe}
                            updateState={this.updateState}
                            handleSelectedItem={this.handleSelectedItem}
                            handleResize={this.handleResize}
                            />
                        </div>
                    </Col>
                    <Col className="right-component major-component" m={2}>Right Component
                        <div>
                            <RightComponent
                            wireframe={this.state.wireframe}
                            currentSelectedItem={this.state.currentSelectedItem}
                            updateState={this.updateState}
                            updatePropertyText={this.updatePropertyText}
                            updatePropertyFontSize={this.updatePropertyFontSize}
                            updatePropertyBackgroundColor={this.updatePropertyBackgroundColor}
                            updatePropertyBorderColor={this.updatePropertyBorderColor}
                            updatePropertyBorderThickness={this.updatePropertyBorderThickness}
                            updatePropertyBorderRadius={this.updatePropertyBorderRadius}/>
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
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'WireFrames'},
  ]),
)(ListScreen);