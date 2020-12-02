import { Component, OnInit } from '@angular/core';
import { Router, RouterModule , ActivatedRoute} from '@angular/router';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
	selector: 'sst-custom-nav',
	templateUrl: require('./custom-nav.component.html').default,
})

export class SSTCustomNavComponent implements OnInit { 
	public isCollapsed: boolean = true; // Default: close nav panel
	private resizeFlag: string;
	private resizeWeb: string;
	private resizeMobile: string;

	constructor( 
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.resizeFlag 	= 'mast';
		this.resizeWeb 		= '2em';
		this.resizeMobile = '14.5em';

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