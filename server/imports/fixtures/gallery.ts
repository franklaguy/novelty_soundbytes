import { Gallery } from '/both/collections/gallery.collection';
import { GalleryModel } from '/both/models/gallery.model';

export function loadGallery() {
	if (Gallery.find().cursor.count() === 0) {
		const gallery: GalleryModel[] = [
			{'_id': '1',
			 'scene': 'WVOE',
			 'mainTag': `WVOE: the Voice of Ebony`,
			 'subTag': 'A documentary film about African American ownership in Radio',
			 'cta': 'Watch teaser Video\'s - Philly, NC, ATL',
			 'mainLink': 'https://vimeo.com/showcase/7723081',
			 'subLink': 'https://vimeo.com/472052771',
			 public: true
			},
			{'_id': '2',
			 'scene': 'Rhyme Va-Lor',
			 'mainTag': 'Rhyme Va-Lor',
			 'subTag': '\'Cold World (Animated Video)\' click here',
			 'cta': 'Rhyme Va-Lor \'Historical\' featuring Sadat X, E-Lux and HorrorCity available @ Tidal, SPotify and all streaming platforms.',
			 'mainLink': 'https://tidal.com/browse/album/121461981',
			 'subLink': 'https://youtu.be/i82l25R09_E',
			 public: true
			},
			{'_id': '3',
			 'scene': 'V3Rewind',
			 'mainTag': 'verseatility III: Rewind DIRECTED / Produced BY INDIVIDUAL ELEVEN',
			 'subTag': 'watch trailer plus additional bonus FOOTaGE',
			 'cta': 'V3Rewind Available NOW!',
			 'mainLink': 'https://www.amazon.com/Verseatility-Stretch-Armstrong-Ahmir-Khalib-Thompson-Questlove/dp/B07BF25SZJ/ref=sr_1_1?dchild=1&keywords=VerseAtility+III%3A+Rewind&qid=1605074911&s=instant-video&sr=1-1-catcorr',
			 'subLink': '/v3rewind/media/',
			 public: true
			},
			{'_id': '4',
			 'scene': '6st',
			 'mainTag': 'Six Strange Tales written BY INDIVIDUAL ELEVEN',
			 'subTag': 'How well do you know your friends?',
			 'cta': 'Available NOW!!!',
			 'mainLink': '/list/',
			 'subLink': '/six-strange-tales/synopsis',
			 public: true
			},
			{'_id': '5',
			 'scene': 'Who-Mag',
			 'mainTag': 'Who Mag available on Roku, Apple, Fuse and over 10 countries',
			 'subTag': 'Ultimate Edition: Tribeca Grand - visual mixtape',
			 'cta': 'V3Rewind OUT NOW!!',
			 'mainLink': 'https://www.whomagtv.com/',
			 'subLink': 'https://www.whomagtv.com/searchs?q=tribeca-grand',
			 public: true
			}
		];

		gallery.forEach((gall: GalleryModel) => Gallery.insert(gall));
	}
}