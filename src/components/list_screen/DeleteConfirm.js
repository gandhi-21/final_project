import React from 'react';

class DeleteConfirm extends React.Component {
    render() {

        if(!this.props.show) {
            return null;
        }

        return (
            <div id="modal_delete">
                <div id="modal_background">
                    <div id="delete_confirm">
                        <br/>
                        Delete List ?
                        <br/><br/><br/>
                        <b>Are you sure you want to delete this list ?</b>
                        <br/><br/>
                        <div>
                            <button id="yes_confirm" onClick={() => {this.props.delete()}}>Yes</button>
                            <button id="no_confirm" onClick={() => {this.props.close()}}>No</button>
                        </div>
                        <br/><br/>
                        This list will not be retrievable.
                    </div>
                </div>
            </div>
        )

    }
}

export default DeleteConfirm;