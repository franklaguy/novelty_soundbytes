import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
	selector: 'wvoe-custom-nav',
	templateUrl: require('./custom-nav.component.html').default
})

export class WVOECustomNavComponent implements OnInit {
	public isCollapsed: boolean = true; // Default: close Nav Panel

	constructor(
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {
		MeteorObservable.call('resizeSafari', 'wvoe', '2em', '14.5em')
										.subscribe(() => {}, 
										(error) => {alert(`Browser Error, sorry about this: ${error}`); 
		});
	}

	search(value:string): void {
		this.router.navigate(['/list/'], { relativeTo: this.route })
	}
}