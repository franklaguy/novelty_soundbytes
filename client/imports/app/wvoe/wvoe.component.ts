import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { WVOEMap } from '/both/collections/wvoe-map.collection';
import { WVOEMapModel } from '/both/models/wvoe-map.model';
import { ChitlinCircuit } from '/both/collections/chitlin-circuit.collection';
import { ChitlinCircuitModel } from '/both/models/chitlin-circuit.model';
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
	private wvoe_map: Observable<WVOEMapModel[]>;
	private wvoe_mapSub: Subscription;

	constructor() {}

	ngOnInit() { 
		if(this.wvoe_mapSub){
			this.wvoe_mapSub.unsubscribe();
		}

		this.wvoe_mapSub = MeteorObservable.subscribe('wvoe_map').subscribe(() => {
			this.wvoe_map = WVOEMap.find({}).zone();
		});

		this.wvoemap = L.map('wvoemapid').setView([38.24, -85.19], 5); 

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
		    iconSize:     [30, 60], // size of the icon
		    iconAnchor:   [22, 40], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 60],  // the same for the shadow
		    popupAnchor:  [-2, -36] // point from which the popup should open relative to the iconAnchor
		});

		this.blurb = `<h1>WVOE</h1>
									<h3>WVOE 1590 AM</h3>
									<p><i>Longest running African American owned Radio Station</i></p>
									<p>1528 Old 74, Chadbourn, NC, Columbus County, 28431</p>
									<p><b>Owner:</b> Lester J. Frink, CEO of Ebony Enterprise</p>
									<hr />
									<ul class="formats">
										<li><b>WIKI:</b> <a href="https://en.wikipedia.org/wiki/WVOE" target="_blank">WVOE Wikipedia</a></li>
										<li><b>Website:</b> <a href="/wvoe/" target="_blank">WVOE</a></li>
										<li><b>Request line:</b> (910).654.5621</li>
										<li><b>Email:</b> wvoe1590radio@yahoo.com</li>
										<li><b>Format:</b> Gospel, Soul</li>
									</ul>
									<hr />
									<p>'WVOE: the Voice of Ebony' documentary film is about the North Carolina radio station
									and other African American owned radio stations POV. WVOE, owned by Ebony Enterprises,
									is the longest running African American owned radio station in the United States.
									Tune in and get to know WVOE on facebook live. Call in, tune in, find out more. WVOE
									goes live in Columbus County, North Carolina.</p><hr />
									<ul class="formats">
										<li><b>Facebook:</b> <a href="hhttps://www.facebook.com/WVOE1590AM-136983856405500" target="_blank">WVOE FB</a></li>
										<li><b>Youtube:</b> <a href="https://youtu.be/o793zqZMomg" target="_blank">WVOE YouTube</a></li>
										<li><b>Instagram:</b> <a href="https://www.instagram.com/novelty_soundbytes/" target="_blank">WVOE IG</a></li>
									</ul>`;


		this.wvoe_mapSub = MeteorObservable.subscribe('wvoe_map').subscribe(() => {
			this.wvoe_map = WVOEMap.find({}).zone();
			this.arr 			= WVOEMap.find({}).fetch();

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
						  	+'<p><b>Owner:</b> '+this.data.owner+'</p><hr />'
						  	+'<ul class="formats">'
								+'<li><b>WIKI:</b> <a href="'+this.data.wiki+'" target="_blank">'+this.data.call_letters+' Wikipedia</a></li>'
								+'<li><b>Website:</b> <a href="'+this.data.url+'" target="_blank">'+this.data.call_letters+'</a></li>'
								+'<li><b>Request line:</b> '+this.data.request_line+'</li>'
								+'<li><b>Email:</b> '+this.data.email+'</li>'
								+'<li><b>Format:</b> '+this.data.format+'</li>'
								+'</ul><hr />'
						  	+'<p>'+this.data.note+'</p><hr />'
								+'<ul class="formats">'
								+'<li><b>Facebook:</b> <a href="'+this.data.facebook+'" target="_blank">'+this.data.call_letters+' FB</a></li>'
								+'<li><b>Youtube:</b> <a href="'+this.data.youtube+'" target="_blank">'+this.data.call_letters+' YouTube</a></li>'
								+'<li><b>Instagram:</b> <a href="'+this.data.instagram+'" target="_blank">'+this.data.call_letters+' IG</a></li>'
								+'</ul>';

						  document.getElementById("blurb").innerHTML = this.blurb;
						})
					 .addTo(this.wvoemap);

				this.wvoemarker.bindPopup(this.arr[i]["blurb"]).openPopup();
			}
		});
	}

	ngOnDestroy() {
		this.wvoe_mapSub.unsubscribe();
	}
}