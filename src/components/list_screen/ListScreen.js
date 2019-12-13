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

class ListScreen extends Component {

    state = {
        name: '',
        owner: '',
    };

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

    render() {
        const auth = this.props.auth;
        const wireframe = this.props.wireframe;

        console.log(wireframe);

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
                            <LeftComponent/>
                        </div>
                    </Col>
                    <Col className="middle-component major-component" m={8}>Middle Component
                        <div>
                            <MiddleComponent
                            wireframe={this.props.wireframe}
                            />
                        </div>
                    </Col>
                    <Col className="right-component major-component" m={2}>Right Component
                        <div>
                            <RightComponent/>
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