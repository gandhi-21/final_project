import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";

import HomeScreen from './components/HomeScreen/HomeScreen.js'

class App extends Component {
  render() {
    const { auth } = this.props;

    if(auth.isLoaded) {
      return(
          <BrowserRouter>
            <div className="App">
              <Switch>
                <Route path="/" component={HomeScreen}/>
              </Switch>
            </div>
          </BrowserRouter>
      )
    }
    return null;
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});


export default compose(
    firebaseConnect(),
    connect(mapStateToProps)
)(App);
