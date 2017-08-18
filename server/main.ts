import { Meteor } from 'meteor/meteor';
import { loadAvailable } from '/server/imports/fixtures/available';
import './imports/publications/available';
import './imports/publications/users';
import '/both/methods/available.methods';
import './imports/publications/images';

Meteor.startup(() => {
	loadAvailable();
});