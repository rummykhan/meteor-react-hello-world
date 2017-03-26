import {Meteor} from 'meteor/meteor';
import React, {Component} from 'react';
import UserRow from './UserRow';
import {createContainer} from 'meteor/react-meteor-data';

import {Users} from '../api/Users';

class App extends Component {
    constructor(props) {
        super(props);
    }

    renderUsers() {
        return (
            <table className="table table-striped table-responsive table-hovered">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.props.users.map((user) => (
                    <UserRow key={user._id} user={user}/>
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
    Meteor.subscribe('users');

    return {
        users: Users.find().fetch()
    }
}, App);