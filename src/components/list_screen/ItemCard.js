import React from 'react';

import {Row, Col, Button} from 'react-materialize';
import {firestoreConnect} from "react-redux-firebase";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Icon } from 'react-materialize';

class ItemCard extends React.Component {

    handleMoveUp = (e, key) => {
        e.preventDefault();
        console.log(key);
        if(key == 0){
            console.log("First item dumbass");
            return;
        } else {
            this.props.firestore.collection("todoLists")
                .doc(this.props.todoList.id)
                .get()
                .then(doc => {
                    const data = doc.data();
                    let temp = data.items[key];
                    data.items[key] = data.items[key-1];
                    data.items[key-1] = temp;

                    for(let i=0;i<data.items.length;i++)
                    {
                        data.items[i].key = i;
                    }

                    console.log(data.items);

                    this.props.firestore.collection('todoLists')
                        .doc(this.props.todoList.id).update(
                            {items: data.items}
                        )
                });
        }
    };

    handleMoveDown = (e, key) => {
        e.preventDefault();
        console.log(key);
        if(key == this.props.todoList.items.length-1){
            console.log("Last item dumbass");
            console.log(this.props.todoList.items.length);
            return;
        } else {
            this.props.firestore.collection("todoLists")
                .doc(this.props.todoList.id)
                .get()
                .then(doc => {
                    const data = doc.data();
                    let temp = data.items[key];
                    data.items[key] = data.items[key+1];
                    data.items[key+1] = temp;

                    console.log(data.items);

                    for(let i=0;i<data.items.length;i++)
                    {
                        data.items[i].key = i;
                    }

                     this.props.firestore.collection('todoLists')
                        .doc(this.props.todoList.id).update(
                            {items: data.items}
                        )
                });

        }


    };

    handleDeleteItem = (e, key) => {
        e.preventDefault();
        console.log(key);
        this.props.firestore.collection("todoLists")
            .doc(this.props.todoList.id)
            .get()
            .then(doc => {
                const data = doc.data();
                data.items.splice(key, 1);
                console.log(data.items);
                for(let i=0;i<data.items.length;i++)
                {
                    data.items[i].key = i;
                }

               this.props.firestore.collection('todoLists')
                    .doc(this.props.todoList.id).update(
                        {items: data.items}
                    )
            });
    };

    render() {
        const { item } = this.props;  
        return (
            <div>
                <Row className="card-row">
                    <Col l={2}>{item.description}</Col>
                    <Col l={2}>{item.assigned_to}</Col>
                    <Col l={2}>{item.due_date}</Col>
                    <Col l={2} className={item.completed ? "green_status" : "red_status"}>{item.completed ? "Completed" : "Pending"}</Col>
                    <Col l={2}></Col>
                    <Col l={2}>
                        <Button floating fab={{direction:'left'}} className="black">
                            <Button  floating className={item.key === 0 ? "disabledButton black" : "list_item_move_up black"} icon={<Icon>arrow_upward</Icon>} onClick={(e) => {this.handleMoveUp(e, item.key)}}/>
                            <Button  floating className={item.key === (this.props.todoList.items.length-1)? "disabledButton black" : "list_item_move_up black"} icon={<Icon>arrow_downward</Icon>} onClick={(e) => {this.handleMoveDown(e, item.key)}}/>
                            <Button floating  className="black" icon={<Icon>delete</Icon>} onClick={(e) => {this.handleDeleteItem(e, item.key)}}/>
                        </Button>
                    </Col>
                </Row>
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
            {collection: 'todoLists'}
        ]),
    )(ItemCard);