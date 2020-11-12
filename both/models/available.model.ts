import { CollectionObject } from './collection-object.model';

export interface AvailableModel extends CollectionObject {
	name: string;
	credit: string;
	description: string;
	links: Links;
	owner?: string;
	public: boolean;
	invited?: string[];
	rsvps?: RSVP[];
	images?: string[];
	createdAt: string;
}

interface Links {
	digital: Other;
	other: Other;
	other2: Other;
	other3: Other;
}

interface Other {
	seller: string;
	link: string;
}

interface RSVP {
	userId: string;
	response: string;
}