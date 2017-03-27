import React, {Component} from 'react';
import {Link} from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Meteor React</Link>
                    </div>

                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/users">Users</Link></li>
                            <li><Link to="/users/create">Create Users</Link></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">User <span className="caret" /></a>
                                <ul className="dropdown-menu">
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