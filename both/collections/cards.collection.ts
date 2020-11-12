import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { CardsModel } from '/both/models/cards.model';

export const Cards = new MongoObservable.Collection<CardsModel>('cards');

function loggedIn() {
	return !!Meteor.user();
}

Cards.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
})