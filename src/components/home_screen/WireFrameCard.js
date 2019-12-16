import React from 'react';

class WireFrameCard extends React.Component {

    render() {
        const { wireframe } = this.props;
        // console.log("WireFrameCard, todoList.id: " + wireframe.id);
        return (
            <div className="card z-depth-0 todo-list-link color-card">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{wireframe.name}</span>
                    <span><button className="right" onClick={() => {this.props.handleDeleteWireframe(wireframe.id)}}>Delete</button></span>
                </div>
            </div>
        );
    }
}
export default WireFrameCard;