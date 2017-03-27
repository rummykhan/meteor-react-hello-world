import {Meteor} from 'meteor/meteor'

const users = [
    {
        username: 'admin',
        email: 'admin@localhost.com',
        password: 'admin',
        profile: {
            first_name: 'admin',
            last_name: 'localhost',
        },
    }
];

const seedUsers = () => {
    if (Meteor.users.find().count() === 0) {
        users.forEach(user => {
            Accounts.createUser({
                email: user.email,
                password: user.password,
                username: user.username,
                profile: user.profile,
            })
        });
    }
};

export default seedUsers;
