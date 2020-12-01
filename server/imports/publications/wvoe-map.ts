import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { WVOEMap } from '/both/collections/wvoe-map.collection';

Meteor.publish('wvoe_map', () => WVOEMap.find());