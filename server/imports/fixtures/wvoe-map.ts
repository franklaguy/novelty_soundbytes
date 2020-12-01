import { WVOEMap } from '/both/collections/wvoe-map.collection';
import { WVOEMapModel } from '/both/models/wvoe-map.model';

export function loadWVOEMap() {
	if(WVOEMap.find().cursor.count() === 0) {
		const wvoe_map: WVOEMapModel[] = [
			{ 
		    "_id": "1",
		    "latLong": [39.994206, -75.153922], 
				"blurb": "<b>Uptown Radio WJYN 98.5</b><br>Uptown Theater / Chitlin Circuit<br><i>Philadelphia, PA</i>",
				"tag": "Part of Uptown Theater, famous venue along the renowned Chitlin Circuit",
				"station": "Uptown Radio WJYN 98.5 FM",
				"call_letters": "WJYN",
				"owner": "Linda Richardson",
				"url": "http://www.uptownradiophilly.org/",
				"wiki": "https://wikidelphia.org/WJYN_98.5_FM_Uptown_Radio",
				"address": "2240 N. Broad St",
				"city": "Philadelphia",
				"state": "PA",
				"county": "North Philly",
				"zip": "19132",
				"radius": "",
				"request_line": "215-763-WJYN",
				"phone": "(215) 236-1878",
				"email": "uptownradio985fm@gmail.com​",
				"format": "R&B, Hip-Hop, Classics",
				"note": `Uptown Radio is part of Uptown Theater, famous venue along the renowned Chitlin Circuit
								where all of the famous acts such as Sarah Vaughan, the Jackson 5, Georgie Woods, Red Fox 
								and plenty others would come and perform. Segregation prohibited these performers from playing
								at the cross town venues so they would come to venues like Uptown Theater in Philly for the 
								people to enjoy. In 2017, Linda Richardson spearheaded the Uptown Theater Restoration Project
								to bring the theater back, due date 2023. Recently, Mrs. Richardson passed on though her work 
								continues. If you're in Philly and want to hear some great music check out Uptown Radio WJYN 98.5 FM
								 and be sure to see them in the upcoming documentary film 'WVOE: the Voice of Ebony'.`,
				"facebook": "https://www.facebook.com/UptownRadioPhilly/",
				"youtube": "https://youtu.be/RdRUnWBPcZw",
				"instagram": "https://www.instagram.com/bigcuzwakeupcall/",
				"activated": true
			},{
		    "_id": "2",
				"latLong": [33.755508, -84.381317], 
				"blurb": "<b>WERD</b><br>1st African American owned Radio Station<br><i>Atlanta, GA</i>",
				"tag": "1st African American owned Radio Station",
				"station": "WERD - silenced",
				"call_letters": "WERD",
				"owner": "Jesse B. Blayton Sr",
				"url": "https://www.atlasobscura.com/places/madam-cj-walker-museum-werd-radio",
				"wiki": "https://en.wikipedia.org/wiki/WERD_(historic_radio_station)",
				"address": "54 Hilliard St NE",
				"city": "Atlanta",
				"state": "Georgia",
				"county": "Sweet Auburn",
				"zip": "30312",
				"radius": "",
				"request_line": "",
				"phone": "(404) 518-2887",
				"email": "madamcjwalkermuseum@gmail.com",
				"format": "Gospel, Soul, Jazz",
				"note": `WERD was the 1st African American owned Radio Station. Directly under the station, 
								was SCLC, ran by Dr. Martin Luther King. You can visit WERD preserved by the historic 
								The Madame Museum in Atlanta, GA or see more in the film 'WVOE: the Voice of Ebony'`,
				"facebook": "https://www.facebook.com/themadamemuseum/",
				"youtube": "https://youtu.be/3zbEluon1mE",
				"instagram": "https://www.instagram.com/novelty_soundbytes/",
				"activated": true
			},{
		    "_id": "3",
				"latLong": [34.350239, -78.859177], 
				"blurb": "<b>WVOE 1590 AM</b><br>the Voice of Ebony<br><i>Chadbourn, NC</i>",
				"tag": "Longest running African American owned Radio Station",
				"station": "WVOE 1590 AM",
				"call_letters": "WVOE",
				"owner": "Lester J. Frink, CEO of Ebony Enterprise",
				"url": "/wvoe/",
				"wiki": "https://en.wikipedia.org/wiki/WVOE",
				"address": "1528 Old 74",
				"city": "Chadbourn",
				"state": "NC",
				"county": "Columbus County",
				"zip": "28431",
				"radius": "",
				"request_line": "(910) 654-5621",
				"phone": "(910) 654-5621",
				"email": "wvoe1590radio@yahoo.com",
				"format": "Gospel, Soul",
				"note": `'WVOE: the Voice of Ebony' documentary film is about the North Carolina radio station
								and other African American owned radio stations POV. WVOE, owned by Ebony Enterprises,
								is the longest running African American owned radio station in the United States.
								Tune in and get to know WVOE on facebook live. Call in, tune in, find out more. WVOE
								goes live in Columbus County, North Carolina.`,
				"facebook": "https://www.facebook.com/WVOE1590AM-136983856405500",
				"youtube": "https://youtu.be/o793zqZMomg",
				"instagram": "https://www.instagram.com/novelty_soundbytes/",
				"activated": true
			}
		];

		wvoe_map.forEach((wvoe: WVOEMapModel) => WVOEMap.insert(wvoe));
	}
}