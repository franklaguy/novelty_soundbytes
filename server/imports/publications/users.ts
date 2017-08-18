import { Meteor } from 'meteor/meteor';
import { Available } from '/both/collections/available.collection';

Meteor.publish('uninvited', function (availableModelId: string) {
	const availableModel = Available.findOne(availableModelId);

	if(!availableModel) {
		throw new Meteor.Error('404', 'No such book!');
	}
	
	return Meteor.users.find({
		_id: {
			$nin: availableModel.invited || [],
			$ne: this.userId
		}
	});
});