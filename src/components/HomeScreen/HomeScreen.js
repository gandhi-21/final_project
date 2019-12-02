import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NavLink, Redirect} from 'react-router-dom';
import { firestoreConnect } from "react-redux-firebase";

class HomeScreen extends Component {
    render() {
        return (
          <div>
              <div className="main">Hello World</div>
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
        { collection: 'wireframes'}
    ]),
)(HomeScreen);