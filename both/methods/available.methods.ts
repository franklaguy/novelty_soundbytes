import { Available } from '../collections/available.collection';
import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

function getContactEmail(user:Meteor.User):string {
	if (user.emails && user.emails.length) {
		return user.emails[0].address;
	}

	return null;
}

Meteor.methods({
	invite: function (availableModelId:string, userId:string) {
		check(availableModelId, String);
		check(userId, String);

		let availableModel = Available.collection.findOne(availableModelId);

		if (!availableModel) {
			throw new Meteor.Error('404', 'No such item available!');
		}

		if (availableModel.public) {
			throw new Meteor.Error('403', 'Need Permissions!');
		}

		if (userId !== availableModel.owner && (availableModel.invited || []).indexOf(userId) == -1) {
			Available.collection.update(availableModelId, {$addToSet: { invited: userId }});

			let from = getContactEmail(Meteor.users.findOne(this.userId)),
					to = getContactEmail(Meteor.users.findOne(userId));

			if (Meteor.isServer && to) {
				Email.send({
					from: 'team@canikickit.tv',
					to: to,
					replyTo: from || undefined,
					subject: 'Available:' + availableModel.name,
					text: `Hello, I just wnated you to know ${availableModel.name} is now available.
								\n\nCheck it out: ${Meteor.absoluteUrl()}\n`
				});
			}
		}
	},
	reply: function(availableModelId: string, rsvp: string) {
		check(availableModelId, String);
		check(rsvp, String);

		if (!this.userId) {
			throw new Meteor.Error('403', 'You must be logged in to reply');
		}

		if (['yes', 'no', 'maybe'].indexOf(rsvp) === -1) {
			throw new Meteor.Error('400', 'Invalid RSVP');
		}

		let availableModel = Available.findOne({ _id: availableModelId });

		if (!availableModel) {
			throw new Meteor.Error('404', 'No such item is available!');
		}

		if(availableModel.owner === this.userId) {
			throw new Meteor.Error('500', 'You are the owner!');
		}

		if (!availableModel.public && (!availableModel.invited || availableModel.invited.indexOf(this.userId) == -1)) {
			throw new Meteor.Error('403', 'No such item available');
		}

		let rsvpIndex = availableModel.rsvps ? availableModel.rsvps.findIndex((rsvp) => rsvp.userId === this.userId) : -1;

		if (rsvpIndex !== -1) {
			if (Meteor.isServer) {
				Available.update(
					{_id: availableModelId, 'rsvps.userId': this.userId },
					{ $set: { 'rsvps.$.response': rsvp } }
				);
			} else {
				// minimongo doesn't yet support $ in modifier. as a temporary
        // workaround, make a modifier that uses an index. this is
        // safe on the client since there's only one thread.
        let modifier = { $set: {} };
        modifier.$set['rsvps.' + rsvpIndex + '.response'] = rsvp;

        Available.update(availableModelId, modifier);
			}
		} else {
			// add new rsvp entry
			Available.update(availableModelId,
				{ $push: { rsvps: { userId: this.userId, response: rsvp } }});
		}
	}
});
