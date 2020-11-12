import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Profiles } from '/both/collections/profiles.collection';

Meteor.publish('profiles', () => Profiles.find()); 