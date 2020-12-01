import { ChitlinCircuit } from '/both/collections/chitlin-circuit.collection';
import { ChitlinCircuitModel } from '/both/models/chitlin-circuit.model';

export function loadChitlinCircuit() {
	if(ChitlinCircuit.find().cursor.count() === 0) {
		const chitlin_circuit: ChitlinCircuitModel[] = [
			{
		    "_id": "1",
		    "latLong": [40.740388, -74.171281],
		    "blurb": "<b>Royal Peacock</b><br />Originally called The Top Hat<br /><i>Atlanta, GA</i>",
		    "tag": "The Historic Royal Peacock, still up and running in Atlanta GA",
		    "venue": "Royal Peacock",
		    "url": "http://sweetauburn.us/peacock.htm",
		    "wiki": "https://en.wikipedia.org/wiki/Chitlin%27_Circuit",
		    "address": "186 Auburn Ave NE",
		    "city": "Atlanta",
		    "state": "GA",
		    "county": "Sweet Auburn",
		    "zip": "30303",
		    "phone": "678-704-3038",
		    "email": "",
		    "note": "<p>This Historic Venue was once a renowned theater along the Chitlin Circuit. Today its a Caribbean-style nightclub with reggae, hip-hop & dancehall nights.</p><p><b>1937-</b> Jesse B. Blayton, Clayton R. Yates and Lorimer Milton organized a corporation known as BLMIYA, and opened the Top Hat Club on Auburn Avenue. Known as Club Beautiful, the Top Hat Club was considered one of the finest clubs for African-Americans in the country.</p><p><b>1949-</b> The Royal Peacock was opened and owned by Carrie B. Cunningham. Egyptian revival became the decor (similar to the Fox Theater) and peacock feathers were cascaded down the side of the building from the street facing windows. Wednesday and Saturday performances were reserved for whites.Cunningham also operated the Royal Hotel and Restaurant for visiting performers unable to stay at white hotels, This building was formerly located next to Big Bethal and is now a parking garage.</p><p>The Top Hat Night Club and later the Royal Peacock hosted top performers including Ray Charles, Marvin Gaye, Aretha Franklin, Dizzy Gillespie, Bessie Smith, Louis Armstrong, B.B. King, the Supremes, and Gladys Knight and the Pips (Gladys was a local born Atlantan). Basking in this brilliant atmosphere out-of-town celebrities such Joe Loius, Jackie Robinson and Muhummad Ali could frequently be found at the Royal Peacock.</p>",
		    "youtube": "",
		    "instagram": "https://www.instagram.com/royalpeacockatl/?hl=en",
		    "activated": false
			}
		];

		chitlin_circuit.forEach((cc: ChitlinCircuitModel) => ChitlinCircuit.insert(cc));
	}
}