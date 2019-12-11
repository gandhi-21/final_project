import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';
import ItemsList from './ItemsList.js'
import { firestoreConnect } from 'react-redux-firebase';

import ListTrash from './ListTrash.js';

class ListScreen extends Component {

    state = {
        name: '',
        owner: '',
    };

    handleDeleteList = () => {

        let id = this.props.todoList.id;

        let firestore = this.props.firestore;

        firestore.collection('todoLists').doc(id).delete();

        return <Redirect to="/" />;

    };

    handleChange = (e) => {
        const { target } = e;

        this.setState(state => ({
            ...state,
            [target.id]: target.value,
        }));
    };

    handleOwner = () => {
        let newOwner = this.refs.Owner.value;

        if(newOwner === '') {
            newOwner = "New Owner";
        }

        let firestore = this.props.firestore.collection('todoLists').doc(this.props.todoList.id).update(
            {owner: newOwner}
        );

    };

    handleName = () => {
        let newName = this.refs.Name.value;

        if(newName === '') {
            newName = "New Name";
        }

        let firestore = this.props.firestore.collection('todoLists').doc(this.props.todoList.id).update(
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
                    deleteList = {this.handleDeleteList}/>
                </div>

                {/*<ItemsList todoList={wireframe} />*/}
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