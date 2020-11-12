import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Cards } from '/both/collections/cards.collection';

Meteor.publish('cards', () => Cards.find());