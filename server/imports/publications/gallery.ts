import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Gallery } from '/both/collections/gallery.collection';

Meteor.publish('gallery', () => Gallery.find());