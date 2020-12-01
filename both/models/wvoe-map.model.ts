import { CollectionObject } from  './collection-object.model';

export interface WVOEMapModel extends CollectionObject {
	_id: string;
	latLong: any; 
	blurb: string;
	tag: string;
	station: string;
	call_letters: string;
	owner: string;
	url: string;
	wiki: string;
	address: string;
	city: string;
	state: string;
	county: string;
	zip: string;
	radius: string;
	request_line: string;
	phone: string;
	email: string;
	format: string;
	note: string;
	facebook: string;
	youtube: string;
	instagram: string;
	activated: boolean;
}