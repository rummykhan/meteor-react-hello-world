import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Guest from '../ui/guest/Guest';
import Login from '../ui/guest/Login';

import Layout from '../ui/includes/Layout';
import App from '../ui/App';
import Home from '../ui/Home';
import CreateUsers from '../ui/CreateUsers';

const Routes = (
    <Router history={browserHistory}>
        <Route component={Guest} onEnter={isGuest}>
            <Route path="/login" components={Login}/>
        </Route>
        <Route path="/" component={Layout} onEnter={ requireAuth }>
            <IndexRoute component={Home}/>
            <Route path="/users" component={App}/>
            <Route path="/users/create" component={CreateUsers}/>
            <Route path="/auth/logout" onEnter={logoutUser}/>
        </Route>
    </Router>
);

function requireAuth(nextState, replace) {
    if (!Meteor.userId()) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname},
        })
    }
}

function isGuest(nextState, replace) {
    if (Meteor.userId()) {
        replace({
            pathname: '/users'
        });
    }
}

function logoutUser(nextState, replace) {
    Meteor.logout();
    replace({
        pathname: '/login'
    });
}


export default Routes;