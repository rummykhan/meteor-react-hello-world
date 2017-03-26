import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from '../ui/includes/Layout';
import App from '../ui/App';
import Home from '../ui/Home';

const Routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="/users" component={App} />
        </Route>
    </Router>
);

export default Routes;