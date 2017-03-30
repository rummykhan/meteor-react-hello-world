import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import TaskRow from './TaskRow';
import {createContainer} from 'meteor/react-meteor-data';

import {Tasks} from '../../api/collections/Tasks';

class App extends Component {
    constructor(props) {
        super(props);
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onEdit(e, task) {
        console.log(task);
    }

    onDelete(e, task) {
        if (confirm('Are you sure')) {
            Meteor.call('tasks.remove', task._id);
        }
    }

    renderUsers() {
        return (
            <table className="table table-striped table-responsive table-hovered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.tasks.map((task) => (
                    <TaskRow key={task._id} task={task} onEdit={this.onEdit} onDelete={this.onDelete}/>
                ))}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                <h3>Users</h3>
                {this.renderUsers()}
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('tasks');

    return {
        tasks: Tasks.find().fetch()
    }
}, App);