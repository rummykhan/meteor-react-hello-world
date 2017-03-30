import {Meteor} from 'meteor/meteor'
import {Tasks} from '../collections/Tasks';

const tasks = [
    {
        name: 'Task 1',
        title: 'Task 1 Title'
    },
    {
        name: 'Task 2',
        title: 'Task 2 Title'
    },
    {
        name: 'Task 3',
        title: 'Task 3 Title'
    }
];

const seedTasks = () => {
    if (Tasks.find().count() === 0) {
        tasks.forEach(task => {
            Tasks.insert(task);
        });
    }
};

export default seedTasks;
