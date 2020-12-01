import { CollectionObject } from './collection-object.model';

export interface ChitlinCircuitModel extends CollectionObject {
	_id: string;
	latLong: any;
  blurb: string;
  tag: string;
  venue: string;
  url: string;
  wiki: string;
  address: string;
  city: string;
  state: string;
  county: string;
  zip: string;
  phone: string;
  email: string;
  note: string;
  youtube: string;
  instagram: string;
  activated: boolean;
}