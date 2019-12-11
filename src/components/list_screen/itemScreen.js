import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {Checkbox} from 'react-materialize';
import {Link, Redirect} from "react-router-dom";

class itemScreen extends React.Component {

    editItem = (item) => {

        item.description = this.refs.description1.value;
        item.assigned_to = this.refs.assigned_to1.value;
        item.due_date = this.refs.due_date1.value;
        item.completed = this.refs.completed1.checked;
        console.log(this.refs.completed1);

        var db = this.props.firestore.collection("todoLists")
            .doc(this.props.todoList.id)
            .get()
            .then(doc => {
                const data = doc.data();
                data.items[item.key] = item;
                console.log(data);
                var updates = this.props.firestore.collection('todoLists').doc(this.props.todoList.id).update(
                    {items: data.items}
            )
            });

    };

    newItem = (key) => {

        let id = this.props.location.pathname;
        id = id.split("/");
        id = id[id.length-1];

        let newItem = {
            description: this.refs.description2.value,
            assigned_to: this.refs.assigned_to2.value,
            due_date: this.refs.due_date2.value,
            key: id,
            completed: this.refs.completed2.checked
        };


        let firestore = this.props.firestore;

        let listRef = this.props.firestore.collection('todoLists')
            .doc(key);

        listRef.update({
            items: firestore.FieldValue.arrayUnion(newItem)
        });

    };

    state = {
        todoList: null,
        key: 0
    };

    render() {

        if(this.props.todoList) {
            if (this.props.todoList.items[this.props.itemNum]) {

                const item = this.props.todoList.items[this.props.itemNum];
                console.log(this.props.todoList.id);
                return (
                    <div>
                        <div id="todo_add_item">
                            <div id="add_item_background">
                                <br/>
                                <div id="item_description_container" className="text_toolbar">
                                    <span id="item_description_prompt">Description:</span>
                                    <input defaultValue={item.description} type="text" id="item_description_textfield"
                                           ref="description1"/>
                                </div>
                                <br/>
                                <div id="item_assigned_to_container" className="text_toolbar">
                                    <span id="item_assigned_to_prompt">Assigned To:</span>
                                    <input defaultValue={item.assigned_to} type="text" id="item_assigned_textfield"
                                           ref="assigned_to1"/>
                                </div>
                                <br/>
                                <div id="item_due_date_container" className="text_toolbar">
                                    <span id="item_due_date_prompt">Due Date:</span>
                                    <input defaultValue={item.due_date} type="date" id="item_due_date" ref="due_date1"/>
                                </div>
                                <br/>

                                <label>
                                    <input type="checkbox" ref="completed1" defaultChecked={item.completed}/>
                                    <span>Completed</span>
                                </label>

                                <br/>
                                <button id="item_add_submit" type="button" onClick={() => {this.editItem(item)}}><Link to={'/todolist/' + this.props.todoList.id}>Submit</Link></button>
                                <button id="item_add_cancel" type="button"><Link to={'/todolist/' + this.props.todoList.id}>Cancel</Link></button>
                            </div>
                        </div>
                    </div>
                );
            }
        }
         else {
            const item = {
                description: "New Item3",
                assigned_to: "New User3",
                completed: false,
                key: this.props.itemNum
            };

            return (
                <div>
                    <div id="todo_add_item">
                        <div id="add_item_background">
                            <div id="item">Item</div>
                            <br/>
                            <div id="item_description_container" className="text_toolbar">
                                <span id="item_description_prompt">Description:</span>
                                <input defaultValue={item.description} type="text" id="item_description_textfield"
                                       ref="description2"/>
                            </div>
                            <br/>
                            <div id="item_assigned_to_container" className="text_toolbar">
                                <span id="item_assigned_to_prompt">Assigned To:</span>
                                <input defaultValue={item.assigned_to} type="text" id="item_assigned_textfield"
                                       ref="assigned_to2"/>
                            </div>
                            <br/>
                            <div id="item_due_date_container" className="text_toolbar">
                                <span id="item_due_date_prompt">Due Date:</span>
                                <input defaultValue={item.due_date} type="date" id="item_due_date" ref="due_date2"/>
                            </div>
                            <br/>
                            <div id="item_completed_container">
                                <label>
                                    <input type="checkbox" ref="completed2"/>
                                    <span>Completed</span>
                                </label>
                            </div>
                            <br/><br/>
                            <div className="final_submit">
                                <button id="item_add_submit" type="button" onClick={() => {this.newItem(this.props.match.params.key)}}><Link to={'/todolist/' + this.props.match.params.key}>Submit</Link></button>
                                <button id="item_add_cancel" type="button"><Link to={'/todolist/' + this.props.match.params.key}>Cancel</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const { todoLists } = state.firestore.data;
    const todoList = todoLists ? todoLists[id] : null;
    if(todoList)
        todoList.id = id;
    const itemNum = ownProps.match.params.key;

    return {
        itemNum,
        todoList,
        auth: state.firebase.auth,
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'todoLists'},
    ]),
    )(itemScreen);