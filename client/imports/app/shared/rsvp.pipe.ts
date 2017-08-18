import { Pipe, PipeTransform } from '@angular/core';
import { AvailableModel } from '/both/models/available.model';
import { Available } from '/both/collections/available.collection';

@Pipe({
	name: 'rsvp'
})
export class RsvpPipe implements PipeTransform {
	transform ( availableModelId: AvailableModel, type: string): number {
		if (!type) {
			return 0;
		}

		let total = 0;
		const found = Available.findOne(availableModelId._id);

		if (found) {
			total = found.rsvps ? found.rsvps.filter(rsvp => rsvp.response === type).length : 0;
		}

		return total;
	}
}
