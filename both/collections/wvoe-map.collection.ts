import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { WVOEMapModel } from '/both/models/wvoe-map.model';
export const WVOEMap = new MongoObservable.Collection<WVOEMapModel>('wvoe_map');

function loggedIn() {
	return !!Meteor.user();
}

WVOEMap.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
});