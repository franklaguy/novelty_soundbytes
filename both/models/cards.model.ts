import { CollectionObject } from './collection-object.model';

export interface CardsModel extends CollectionObject {
	_id: string;
	title: string;
	card: string;
	cardAltTag: string;
	desc: string;
	flag: boolean;
	youTubeSrc: string;
	soundcloudSrc: string;
	createdAt: string;
	owner?: string;
	public: boolean;
}