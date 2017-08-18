import { Pipe, PipeTransform } from '@angular/core';
import { Images } from '/both/collections/images.collection';
import { AvailableModel } from '/both/models/available.model';

@Pipe({
	name: 'displayMainImage'
})

export class DisplayMainImagePipe implements PipeTransform {
	transform(availableModel: AvailableModel) {
		if(!availableModel) {
			return;
		}

		let imageUrl: string,
				imageId: string = (availableModel.images || [])[0];

		const found = Images.findOne(imageId);
		
		if (found) {
			imageUrl = found.url;
		}

		return imageUrl;
	}
}