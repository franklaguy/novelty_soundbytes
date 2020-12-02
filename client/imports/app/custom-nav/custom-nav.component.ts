import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
	selector: 'custom-nav',
	templateUrl: require('./custom-nav.component.html').default
})

export class CustomNavComponent implements OnInit { 
	public isCollapsed: boolean = true; // Default: close nav panel
	private resizeFlag: string;
	private resizeWeb: string;
	private resizeMobile: string;

	constructor( 
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.resizeFlag 	= 'home';
		this.resizeWeb 		= '1.5em';
		this.resizeMobile = '14.5em';

		switch(this.router.url){
			case '/who-we-are':
			case '/nsb-services':
			case '/contact':
				this.resizeFlag 	= 'mast';
				this.resizeWeb 		= '5em';
				this.resizeMobile = '14.5em';
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