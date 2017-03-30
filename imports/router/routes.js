import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

// import guest components..
import Guest from '../ui/guest/Guest';
import Login from '../ui/guest/Login';


// import admin components..
import Layout from '../ui/admin/includes/Layout';
import App from '../ui/admin/App';
import Home from '../ui/admin/Home';
import CreateUsers from '../ui/admin/CreateUsers';
import ChangePassword from '../ui/admin/auth/ChangePassword'

const Routes = (
    <Router history={browserHistory}>
        <Route component={Guest} onEnter={isGuest}>
            <Route path="/auth/login" components={Login}/>
        </Route>
        <Route path="/" component={Layout} onEnter={ requireAuth }>
            <IndexRoute component={Home}/>
            <Route path="/tasks" component={App}/>
            <Route path="/tasks/create" component={CreateUsers}/>
            <Route path="/auth/change/password" component={ChangePassword}/>
            <Route path="/auth/logout" onEnter={logoutUser}/>
        </Route>
    </Router>
);

function requireAuth(nextState, replace) {
    if (!Meteor.userId()) {
        replace({
            pathname: '/auth/login',
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
        pathname: '/auth/login'
    });
}


export default Routes;