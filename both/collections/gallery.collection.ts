import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
import { GalleryModel } from '/both/models/gallery.model';
export const Gallery = new MongoObservable.Collection<GalleryModel>('gallery');

function loggedIn() {
	return !!Meteor.user();
}

Gallery.allow({
	insert: loggedIn,
	update: loggedIn,
	remove: loggedIn
});