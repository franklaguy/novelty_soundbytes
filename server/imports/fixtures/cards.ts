import { Cards } from '/both/collections/cards.collection'
import { CardsModel } from '/both/models/cards.model';

export function loadCards() {
	let entry = new Date().toString();

	if (Cards.find().cursor.count() === 0){
		const cards: CardsModel[] = [
			{
				'_id': '1',
				'title': 'Ultimate Edition: Tribeca-Grand',
				'card': '/img/v3rewind/cards/tg-mixtape',
				'cardAltTag': 'Tribeca-Grand mixtape cover',
				'desc': 'mixed by Individual Eleven',
				'flag': true,
				'youTubeSrc': '',
				'soundcloudSrc': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/403097565%3Fsecret_token%3Ds-xfhKH&color=%236cc4d4&inverse=false&auto_play=false&show_user=true',
				'createdAt': entry,
				'public': true
			},
			{
				'_id': '2',
				'title': 'TRIBECA-GRAND on ShowOff Radio',
				'card': '/img/v3rewind/cards/statik-selektah-sor',
				'cardAltTag': 'Show Off Radio card',
				'desc': 'footage courtesy of NSB',
				'flag': false,
				'youTubeSrc': 'https://www.youtube.com/embed/kczJSMXL5iE?rel=0&autoplay=1',
				'soundcloudSrc': '',
				'createdAt': entry,
				'public': true
			},
			{
				'_id': '3',
				'title': 'TRIBECA-GRAND on SiriusXM',
				'card': '/img/v3rewind/cards/rap-is-outta-control',
				'cardAltTag': 'Rap is Outta Control card',
				'desc': 'footage courtesy of NSB',
				'flag': false,
				'youTubeSrc': 'https://www.youtube.com/embed/Qjwfo6KqC_A?rel=0&autoplay=1',
				'soundcloudSrc': '',
				'createdAt': entry,
				'public': true
			},
			{
				'_id': '4',
				'title': 'VerseAtility III: Rewind',
				'card': '/img/v3rewind/cards/v3rewind-onesheet2',
				'cardAltTag': 'VerseAtility III: Rewind onesheet',
				'desc': '6/12/18 - Global Distribution Date',
				'flag': false,
				'youTubeSrc': 'https://www.youtube.com/embed/bNqjWSChwoQ?rel=0&autoplay=1',
				'soundcloudSrc': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/193545764&color=%231c1c1c&inverse=false&auto_play=false&show_user=true',
				'createdAt': entry,
				'public': true
			},
			{
				'_id': '5',
				'title': 'Rubar the Axeman',
				'card': '/img/v3rewind/cards/rubar-walmart',
				'cardAltTag': 'Hard On in Walmart card',
				'desc': 'Hard On in Walmart',
				'flag': true,
				'youTubeSrc': '',
				'soundcloudSrc': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/250163408&color=%231c1c1c&inverse=false&auto_play=false&show_user=true',
				'createdAt': entry,
				'public': true
			},
			{
				'_id': '6',
				'title': `Tribeca-Grand 'NY-PHI' video`,
				'card': '/img/v3rewind/cards/ultimate-tg',
				'cardAltTag': 'Tribeca-Grand',
				'desc': 'Directors Cut',
				'flag': true,
				'youTubeSrc': '',
				'soundcloudSrc': '',
				'createdAt': entry,
				'public': true
			},
			{
				'_id': '7',
				'title': 'Prince Paul: Redux',
				'card': '/img/v3rewind/cards/prince-paul-redux',
				'cardAltTag': 'Prince Paul Redux card',
				'desc': 'Controversial Headlines feat HorrorCity',
				'flag': false,
				'youTubeSrc': 'https://www.youtube.com/embed/991eJdNKfJM?rel=0&autoplay=1',
				'soundcloudSrc': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/346678661&color=%233e5443&inverse=false&auto_play=false&show_user=true',
				'createdAt': entry,
				'public': true
			},
			{
				'_id': '8',
				'title': 'VerseAtility II: In Stereo',
				'card': '/img/v3rewind/cards/F2magcover',
				'cardAltTag': 'F2 Mag cover',
				'desc': 'from the archives of Frequency Magazine',
				'flag': false,
				'youTubeSrc': 'https://www.youtube.com/embed/R0NqppPxWg4?rel=0&autoplay=1',
				'soundcloudSrc': 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/149593863&color=%23080606&inverse=false&auto_play=false&show_user=true',
				'createdAt': entry,
				'public': true
			},
		];

		cards.forEach((card: CardsModel) => Cards.insert(card));
	}
}