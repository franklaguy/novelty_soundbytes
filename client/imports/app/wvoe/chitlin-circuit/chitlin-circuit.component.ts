import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { ChitlinCircuit } from '/both/collections/chitlin-circuit.collection';
import { ChitlinCircuitModel } from '/both/models/chitlin-circuit.model';
import  * as L from 'leaflet';

@Component({
	selector: 'chitlin-circuit',
	templateUrl: require('./chitlin-circuit.component.html').default
})

export class CCComponent implements OnInit {
	public isCollapsed: boolean = true; // Default: close Nav Panel
	private ccMap: void;
	private ccmarker: any;
	private ccIcon: string;
	private arr: any;
	public blurb: string;
	private data: string;
	private chitlin_circuit: Observable<ChitlinCircuitModel[]>;
	private chitlin_circuitSub: Subscription;

	constructor(
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {
		if(this.chitlin_circuitSub) {
			this.chitlin_circuitSub.unsubscribe();
		}

		this.chitlin_circuitSub = MeteorObservable.subscribe('chitlin_circuit').subscribe(() => {
			this.chitlin_circuit = ChitlinCircuit.find({}).zone();
		});

		this.ccMap = L.map('ccMapid').setView([38.24, -85.19], 5); 

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	    attribution: 'NSB',
	    maxZoom: 18,
	    id: 'mapbox/light-v10',
	    tileSize: 512,
	    zoomOffset: -1,
	    accessToken: 'pk.eyJ1IjoiZnJhbmtsZWVnaXRuaXQiLCJhIjoiY2toNDNvbG11MDA0ZDMwc2UzbWdzZDQwbiJ9.jXtTXyZX7twvsiFKoueqSQ'
		}).addTo(this.ccMap);

		L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';

		this.ccIcon = L.icon({
		    iconUrl: 			'img/wvoe/red-star.png',
		    iconSize:     [40, 40], // size of the icon
		    iconAnchor:   [22, 40], // point of the icon which will correspond to marker's location
		    shadowAnchor: [4, 40],  // the same for the shadow
		    popupAnchor:  [-2, -36] // point from which the popup should open relative to the iconAnchor
		});

		this.blurb = `<h1>Chitlin Circuit</h1>
									<h3>Urban Theater Circuit</h3>
									<p><i>These Historical Landmarks were once the life line of Tour Routes for the most famous Pan-African Entertainers</i></p>
									<hr />
									<ul class="formats">
										<li><b>WIKI:</b> <a href="https://en.wikipedia.org/wiki/Chitlin%27_Circuit" target="_blank">Wikipedia</a></li>
									</ul>
									<hr />
									<p class="pb-3">The Chitlin' Circuit was a collection of performance venues throughout the eastern, southern, 
									and upper Midwest areas of the United States that provided commercial and cultural acceptance 
									for African American musicians, comedians, and other entertainers during the era of racial segregation 
									in the United States (from at least the early 19th century through the 1960s)</p>
									<p>The Chitlin' Circuit was a 'FUBU' or 'For Us, By Us' concept for touring acts where the people could
									count on seeing the best of the best Acts. There is debate as to when 
									the Chitlin' Circuit peaked. Some say its peak was in the 1930s, some say it was after World War II, and
									others say it was the time of the blues.</p><hr />
									<ul class="formats">
										<li><b>Instagram:</b> <a href="https://www.instagram.com/novelty_soundbytes/" target="_blank">novelty_soundbytes</a></li>
									</ul>`;

		this.chitlin_circuitSub = MeteorObservable.subscribe('chitlin_circuit').subscribe(() => {
			this.chitlin_circuit  = ChitlinCircuit.find({}).zone();
			this.arr 							= ChitlinCircuit.find({}).fetch();

			for (let i=0; i < this.arr.length; i++) {

				this.ccmarker = new L.marker(this.arr[i]["latLong"], {icon: this.ccIcon, data: this.arr[i]})
					 	.on('click', function(e) {
					 		this.data = e.target.options.data;

						  this.blurb = '<h1>'+this.data.venue+'</h1>'
						  	+'<p>'+this.data.blurb+'</p>'
						  	+'<p class="font-weight-light"><i>'+this.data.tag+'</i></p>'
						  	+'<p>'+this.data.address+', '
						  	+this.data.city+', '+this.data.state+', '
						  	+this.data.county+', '+this.data.zip+'</p>'
						  	+'<hr />'
						  	+'<ul class="formats">'
								+'<li><b>WIKI:</b> <a href="'+this.data.wiki+'" target="_blank">'+this.data.venue+' Wikipedia</a></li>'
								+'<li><b>Website:</b> <a href="'+this.data.url+'" target="_blank">'+this.data.venue+'</a></li>'
								+'<li><b>Phone:</b> '+this.data.phone+'</li>'
								+'<li><b>Email:</b> '+this.data.email+'</li>'
								+'</ul><hr />'
						  	+'<p>'+this.data.note+'</p><hr />'
								+'<ul class="formats">'
								+'<li><b>Youtube:</b> <a href="'+this.data.youtube+'" target="_blank">'+this.data.venue+'</a></li>'
								+'<li><b>Instagram:</b> <a href="'+this.data.instagram+'" target="_blank">'+this.data.venue+'</a></li>'
								+'</ul>';

						  document.getElementById("blurb").innerHTML = this.blurb;
						})
					 .addTo(this.ccMap);

				this.ccmarker.bindPopup(this.arr[i]["blurb"]).openPopup();
			}
		});
	}

	ngOnDestroy() {
		this.chitlin_circuitSub.unsubscribe();
	}
}