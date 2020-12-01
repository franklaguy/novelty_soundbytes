import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { ChitlinCircuitModel } from '/both/models/chitlin-circuit.model';
export const ChitlinCircuit = new MongoObservable.Collection<ChitlinCircuitModel>('chitlin_circuit');

function loggedIn() {
	return !!Meteor.user();
}

ChitlinCircuit.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
});