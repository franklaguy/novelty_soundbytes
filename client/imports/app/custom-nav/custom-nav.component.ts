import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
import template from './custom-nav.component.html';
// import style from './custom-nav.component.scss';

@Component({
	selector: 'custom-nav',
	templateUrl: require('./custom-nav.component.html').default,
	// template,
	// styleUrls: [ './custom-nav.component.scss' ]
})

export class CustomNavComponent implements OnInit { 
	public isCollapsed: boolean = true; // Default: close nav panel

	constructor( 
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {}

	search(value: string): void {
		this.router.navigate(['/list/'], { relativeTo: this.route })
	}
}