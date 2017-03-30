import { Meteor } from 'meteor/meteor';
import seedUsers from '../imports/api/seeder/Users';
import seedTasks from '../imports/api/seeder/Tasks';

Meteor.startup(() => {
    seedUsers();
    seedTasks();
});