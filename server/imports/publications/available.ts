import { Meteor } from 'meteor/meteor';
import { Counts } from 'meteor/tmeasday:publish-counts';
import { Available } from '/both/collections/available.collection';

interface Options {
	[key: string]: any;
}

Meteor.publish('available', function(options: Options, name?: string) {
	const selector = buildQuery.call(this, null, name);

	Counts.publish(this, 'numberOfAvailable', Available.collection.find(selector), { noReady: true });

	return Available.find(selector, options);
});

Meteor.publish('availableModel', function(availableModelId: string) {
	return Available.find(buildQuery.call(this, availableModelId));
});

function buildQuery(availableModelId?: string, name?: string): Object {
	const isAvailable = {
		$or: [
			{ public: true },
     	{ $and: [
     		{ owner: this.userId }, 
     		{ owner: { $exists: true  }
       }
      ]
     },
     { $and: [
          { invited: this.userId },
          { invited: { $exists: true } }
        ]
      }]
    };

	if (availableModelId) {
		return {
			$and: [
				{ _id: availableModelId },
				isAvailable 
			]
		};
	}

const searchRegEx = { '$regex': '.*' + (name || '') + '.*', '$options': 'i' };

	return {
		$and: [{ 'name': searchRegEx },
					isAvailable]
	};
}