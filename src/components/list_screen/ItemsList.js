import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { compose } from 'redux';
import ItemCard from './ItemCard';
import { firestoreConnect } from 'react-redux-firebase';

import {Row, Col, Button} from 'react-materialize';

class ItemsList extends React.Component {

    render() {
        const todoList = this.props.todoList;
        const items = todoList.items;
        console.log("ItemsList: todoList.id " + todoList.id);



        return (
            <div className="todo-lists section">
               <Row className="headings">
                   <Col l={2}>Description</Col>
                   <Col l={2}>Assigned To</Col>
                   <Col l={2}>Due Date</Col>
                   <Col l={2}>Status</Col>
                   <Col l={2}></Col>
                   <Col l={2}>Actions</Col>
               </Row>
                {items && items.map(function(item) {
                    item.id = item.key;
                    return (
                        <Link to={'/todoList/' + todoList.id + '/' + item.key} key={item.key}>
                            <ItemCard todoList={todoList} item={item}>
                            </ItemCard>
                        </Link>
                    );})
                }

                <div className="center">
                    <Link to={'todolist/' + todoList.id + '/' + items.length}>
                        <Button className="new_item_button">
                            Add a new item
                        </Button>
                    </Link>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const todoList = ownProps.todoList;
    return {
        todoList,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'todoLists' },
    ]),
)(ItemsList);

