import { Meteor } from 'meteor/meteor';
import React  from 'react';
import { render } from 'react-dom';

import Routes from '../imports/client/router/routes'

Meteor.startup(() => {
    render(
        Routes,
        document.getElementById('app')
    );
});
