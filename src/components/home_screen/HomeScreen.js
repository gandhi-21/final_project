import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import WireFrameLinks from './WireFrameLinks'

class HomeScreen extends Component {

    handleNewWireFrame = () => {

        let fireStore = this.props.firestore;

        let newWireFrame = {
            name: "New Name",
            owner: "New Owner",
            components: [],
            zoomPercent: 100,
            timestamp: this.props.firestore.FieldValue.serverTimestamp(),
        };

        fireStore.collection('WireFrames').add(newWireFrame).then(ref => {
            this.props.history.push("/WireFrames/" + ref.id);
        });
    };

    updateTimeStamp = (id) => {
        this.props.firestore.collection('WireFrames').doc(id).update({
            timestamp: this.props.firestore.FieldValue.serverTimestamp(),
        });

        this.props.firestore.collection('WireFrames').orderBy('timestamp', 'desc');

    };

    render() {
        if (!this.props.auth.uid) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m4">
                        <WireFrameLinks
                        updateTimeStamp={this.updateTimeStamp}/>
                    </div>

                    <div className="col s8">
                        <div className="banner">
                            Wireframer<br />
                            Wireframe Maker
                        </div>
                        
                        <div className="home_new_list_container">
                                <button className="home_new_list_button" onClick={() => {this.handleNewWireFrame()}}>
                                    Create a New Wireframe
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'WireFrames', orderBy: ['timestamp', 'desc']},
    ]),
)(HomeScreen);