import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { ChitlinCircuit } from '/both/collections/chitlin-circuit.collection';

Meteor.publish('chitlin_circuit', () => ChitlinCircuit.find());