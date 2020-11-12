import { Component, OnInit } from '@angular/core';
import  * as L from 'leaflet';

@Component({
	selector: 'wvoe',
	templateUrl: require('./wvoe.component.html').default
})

export class WVOEComponent implements OnInit {
	private wvoemap: void;
	private wvoemarker: any;
	private wvoeIcon: string;
	private arr: any;
	public blurb: string;
	private data: string;

	constructor() {}

	ngOnInit() { 
		this.wvoemap = L.map('wvoemapid').setView([38.24, -95.19], 4); 

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	    attribution: 'NSB',
	    maxZoom: 18,
	    id: 'mapbox/light-v10',
	    tileSize: 512,
	    zoomOffset: -1,
	    accessToken: 'pk.eyJ1IjoiZnJhbmtsZWVnaXRuaXQiLCJhIjoiY2toNDNvbG11MDA0ZDMwc2UzbWdzZDQwbiJ9.jXtTXyZX7twvsiFKoueqSQ'
		}).addTo(this.wvoemap);

		L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';

		this.wvoeIcon = L.icon({
		    iconUrl: 			'img/wvoe/radio-antenna.png',
		    iconSize:     [40, 70], // size of the icon
		    iconAnchor:   [22, 40], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 70],  // the same for the shadow
		    popupAnchor:  [-2, -36] // point from which the popup should open relative to the iconAnchor
		});

		this.arr = [
			{ "latLong": [39.994206, -75.153922], 
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
			},{
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
			},{
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
			}
		]

		this.blurb = `<h1>WVOE</h1>
									<h3>WVOE 1590 AM</h3>
									<p><i>Longest running African American owned Radio Station</i></p>
									<p>1528 Old 74, Chadbourn, NC, Columbus County, 28431</p>
									<p><b>Owner:</b> Lester J. Frink, CEO of Ebony Enterprise</p>
									<ul class="formats pt-3">
										<li><b>WIKI:</b> <a href="https://en.wikipedia.org/wiki/WVOE" target="_blank">WVOE Wikipedia</a></li>
										<li><b>Website:</b> <a href="/wvoe/" target="_blank">WVOE</a></li>
										<li><b>Request line:</b> (910).654.5621</li>
										<li><b>Email:</b> wvoe1590radio@yahoo.com</li>
										<li><b>Format:</b> Gospel, Soul</li>
									</ul>
									<p class="pt-2">'WVOE: the Voice of Ebony' documentary film is about the North Carolina radio station
									and other African American owned radio stations POV. WVOE, owned by Ebony Enterprises,
									is the longest running African American owned radio station in the United States.
									Tune in and get to know WVOE on facebook live. Call in, tune in, find out more. WVOE
									goes live in Columbus County, North Carolina.</p>
									<ul class="formats pt-3">
										<li><b>Facebook:</b> <a href="hhttps://www.facebook.com/WVOE1590AM-136983856405500" target="_blank">WVOE FB</a></li>
										<li><b>Youtube:</b> <a href="https://youtu.be/o793zqZMomg" target="_blank">WVOE YouTube</a></li>
										<li><b>Instagram:</b> <a href="https://www.instagram.com/novelty_soundbytes/" target="_blank">WVOE IG</a></li>
									</ul>`;

		for (let i=0; i < this.arr.length; i++) {
			this.wvoemarker = new L.marker(this.arr[i]["latLong"], {icon: this.wvoeIcon, data: this.arr[i]})
														 .on('click', function(e) {
														 		this.data = e.target.options.data;

															  this.blurb = '<h1>'+this.data.call_letters+'</h1>'
															  	+'<h3>'+this.data.station+'</h3>'
															  	+'<p><i>'+this.data.tag+'</i></p>'
															  	+'<p>'+this.data.address+', '
															  	+this.data.city+', '+this.data.state+', '
															  	+this.data.county+', '+this.data.zip+'</p>'
															  	+'<p><b>Owner:</b> '+this.data.owner+'</p>'
															  	+'<ul class="formats pt-3">'
																	+'<li><b>WIKI:</b> <a href="'+this.data.wiki+'" target="_blank">'+this.data.call_letters+' Wikipedia</a></li>'
																	+'<li><b>Website:</b> <a href="'+this.data.url+'" target="_blank">'+this.data.call_letters+'</a></li>'
																	+'<li><b>Request line:</b> '+this.data.request_line+'</li>'
																	+'<li><b>Email:</b> '+this.data.email+'</li>'
																	+'<li><b>Format:</b> '+this.data.format+'</li>'
																	+'</ul>'
															  	+'<p class="pt-2">'+this.data.note+'</p>'
																	+'<ul class="formats pt-3">'
																	+'<li><b>Facebook:</b> <a href="'+this.data.facebook+'" target="_blank">'+this.data.call_letters+' FB</a></li>'
																	+'<li><b>Youtube:</b> <a href="'+this.data.youtube+'" target="_blank">'+this.data.call_letters+' YouTube</a></li>'
																	+'<li><b>Instagram:</b> <a href="'+this.data.instagram+'" target="_blank">'+this.data.call_letters+' IG</a></li>'
																	+'</ul>';

															  document.getElementById("blurb").innerHTML = this.blurb;
															})
														 .addTo(this.wvoemap);
			this.wvoemarker.bindPopup(this.arr[i]["blurb"]).openPopup();
		}
	}
		
}