import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
	selector: 'v3-custom-nav',
	templateUrl: require('./custom-nav.component.html').default,
})

export class V3CustomNavComponent implements OnInit { 
	public isCollapsed: boolean = true; // Default: close nav panel
	private resizeFlag: string;
	private resizeWeb: string;
	private resizeMobile: string;

	constructor( 
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.resizeFlag 	= 'v3rewind';
		this.resizeWeb 		= '1.5rem';
		this.resizeMobile = '15rem';

		switch(this.router.url){
			case '/v3rewind':
				this.resizeFlag 	= 'v3rewind';
				this.resizeMobile = '16rem';
				break;
			case '/v3rewind/media':
				this.resizeFlag 	= 'media-view';
				break;
			case '/v3rewind/press':
				this.resizeFlag 	= 'press';
				break;
			case '/v3rewind/sponsors':
				this.resizeFlag 	= 'sponsors';
				break;
		}

		MeteorObservable.call('resizeSafari',
													this.resizeFlag, 
													this.resizeWeb, 
													this.resizeMobile)
										.subscribe(() => {}, 
										(error) => {alert(`Browser Error, sorry about this: ${error}`); 
		});
	}

	search(value: string): void {
		this.router.navigate(['/list/'], { relativeTo: this.route })
	}
}