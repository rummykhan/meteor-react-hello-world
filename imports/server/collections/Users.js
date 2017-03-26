import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

if( Meteor.isServer ){
    Meteor.publish('users', function userPublication(){
        return Users.find({});
    });
}