import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { ProfilesModel } from '/both/models/profiles.model';

export const Profiles = new MongoObservable.Collection<ProfilesModel>('profiles');

function loggedIn() {
	return !!Meteor.user();
}

Profiles.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
});