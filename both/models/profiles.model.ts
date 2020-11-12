import { CollectionObject } from './collection-object.model';

export interface ProfilesModel extends CollectionObject {
	_id: string;
	profile: string;
	ig: string;
	desc: string;
	embed: string;
	img: string;
	owner?: string;
	public: boolean;
}