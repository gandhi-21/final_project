import React from 'react'
import todoJson from './WireFramerData.json'
import { getFirestore } from 'redux-firestore';
import { connect }  from 'react-redux';
import { compose } from 'redux';

class DatabaseTester extends React.Component {

    // NOTE, BY KEEPING THE DATABASE PUBLIC YOU CAN
    // DO THIS ANY TIME YOU LIKE WITHOUT HAVING
    // TO LOG IN
    handleClear = () => {
        const fireStore = getFirestore();
        fireStore.collection('WireFrames').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting " + doc.id);
                fireStore.collection('WireFrames').doc(doc.id).delete();
            })
        });

        fireStore.collection('Users').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc) {
                console.log("deleting " + doc.id);
                fireStore.collection('Users').doc(doc.id).delete();
            })
        });
    };

    handleReset = () => {
        const fireStore = getFirestore();
        todoJson.WireFrames.forEach(wireFrameJson => {
            fireStore.collection('WireFrames').add({
                    name: wireFrameJson.name,
                    owner: wireFrameJson.owner,
                    components: wireFrameJson.components,
                    zoomPercent: wireFrameJson.zoomPercent,
                    timestamp: fireStore.FieldValue.serverTimestamp(),
                    sorting: "asc"
                }).then(() => {
                    console.log("DATABASE RESET");
                }).catch((err) => {
                    console.log(err);
                });
        });

        console.log("adding users");
        todoJson.users.forEach(userJson => {
            fireStore.collection('Users').add({
                firstname: userJson.firstName,
                lastname: userJson.lastName,
                initials: userJson.initials,
                isadmin: userJson.isAdmin
            }).then(() => {
                console.log("Users added");
            }).catch((err) => {
                console.log(err)
            });
        })

    };

    render() {
        console.log(this.props.auth);
        return (
            <div>
                <button onClick={this.handleClear}>Clear Database</button>
                <button onClick={this.handleReset}>Reset Database</button>
            </div>)
    }
}

const mapStateToProps = function (state) {
    return {
        auth: state.firebase.auth,
        firebase: state.firebase
    };
};

export default connect(mapStateToProps)(DatabaseTester);