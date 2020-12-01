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

	constructor( 
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {
		MeteorObservable.call('resizeSafari', 'home', '1.5em', '14.5em').subscribe(() => {}, 
			(error) => {alert(`Browser Error, sorry about this: ${error}`); 
		});
	}

	search(value: string): void {
		this.router.navigate(['/list/'], { relativeTo: this.route })
	}
}