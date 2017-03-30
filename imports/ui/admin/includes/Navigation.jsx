import React, {Component} from 'react';
import {Link} from 'react-router';
import {Meteor} from 'meteor/meteor';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Dashboard</Link>
                    </div>

                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">Users <span className="caret"/></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/tasks">Tasks</Link></li>
                                    <li><Link to="/tasks/create">Create Tasks</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">Welcome X <span className="caret"/></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/auth/change/password">Change Password</Link></li>
                                    <li><Link to="/auth/logout">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default Navigation;