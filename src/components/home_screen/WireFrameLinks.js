import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import WireFrameCard from './WireFrameCard';

class WireFrameLinks extends React.Component {

    updateTimeStamp = (id) => {
        this.props.updateTimeStamp(id);
    };



    render() {
        const wireframes = this.props.wireframes;
        let userWireframe = [];

        if(wireframes && this.props.auth){

            console.log(this.props.auth.uid);

            wireframes.forEach(wireframe => {
                if(this.props.auth.uid === wireframe.owner) {
                    userWireframe.push(wireframe);
                }
            });
        }

        console.log(userWireframe);


        return (
            <div className="todo-lists section">
                {userWireframe && userWireframe.map(wireframe => (



                    <Link to={'/wireframe/' + wireframe.id} key={wireframe.id} onClick={() => {this.updateTimeStamp(wireframe.id)}}>
                        <WireFrameCard wireframe={wireframe} />
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        wireframes: state.firestore.ordered.WireFrames,
        auth: state.firebase.auth,
    };
};

export default compose(connect(mapStateToProps))(WireFrameLinks);