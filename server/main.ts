import { Meteor } from 'meteor/meteor';
import { loadAvailable } from '/server/imports/fixtures/available';
import { loadGallery } from '/server/imports/fixtures/gallery';
import { loadProfiles } from '/server/imports/fixtures/profiles';
import { loadCards } from '/server/imports/fixtures/cards';
import { loadWVOEMap } from '/server/imports/fixtures/wvoe-map';
import { loadChitlinCircuit } from '/server/imports/fixtures/chitlin-circuit';
import './imports/publications/available';
import './imports/publications/gallery';
import './imports/publications/profiles';
import './imports/publications/cards';
import './imports/publications/users';
import './imports/publications/wvoe-map';
import './imports/publications/chitlin-circuit';
import '/both/methods/available.methods';
import '/both/methods/helper.methods';
import './imports/publications/images';

Meteor.startup(() => {
	loadAvailable();
	loadGallery();
	loadProfiles();
	loadCards();
	loadWVOEMap();
	loadChitlinCircuit();
});