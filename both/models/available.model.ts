import { CollectionObject } from './collection-object.model';

export interface AvailableModel extends CollectionObject {
	name: string;
	description: string;
	links: Links;
	reviews: string;
	owner?: string;
	public: boolean;
	invited?: string[];
	rsvps?: RSVP[];
	images?: string[];
}

interface Links {
	digital: string;
	paperback: string;
	hardcover: string;
}

interface RSVP {
	userId: string;
	response: string;
}