import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { AvailableModel } from '/both/models/available.model';
export const Available = new MongoObservable.Collection<AvailableModel>('available');

function loggedIn() {
	return !!Meteor.user();
}

Available.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
});