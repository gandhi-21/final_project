import React from 'react';

import DeleteConfirm from "./DeleteConfirm.js";
import remove_list from '../../icons/icons_trash.png';

class ListTrash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        console.log(this.props);
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleListDelete = () => {

        this.props.deleteList(true);

    };

    render() {
        return(
            <div>
                <div id="list_trash" onClick={this.toggleModal}>
                    <img src={remove_list} alt=""/>
                </div>

                <DeleteConfirm
                show={this.state.isOpen}
                onClose={this.toggleModal}
                close={this.toggleModal}
                delete={this.handleListDelete}
                >
                    Can I delete?
                </DeleteConfirm>

            </div>
        )
    }
}

export default ListTrash;