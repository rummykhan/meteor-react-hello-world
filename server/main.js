import { Meteor } from 'meteor/meteor';
import seedUsers from '../imports/api/seeder/Users';

Meteor.startup(() => {
    seedUsers();
});