import { CollectionObject } from './collection-object.model';

export interface GalleryModel extends CollectionObject {
	_id: string;
	scene: string;
	mainTag: string;
	subTag: string;
	cta: string;
	mainLink: string;
	subLink: string;
	owner?: string;
	public: boolean;
}