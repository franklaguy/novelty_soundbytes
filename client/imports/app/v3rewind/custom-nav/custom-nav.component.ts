import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'v3-custom-nav',
	templateUrl: require('./custom-nav.component.html').default,
})

export class V3CustomNavComponent implements OnInit { 
	public isCollapsed: boolean = true; // Default: close nav panel

	constructor( 
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {}

	search(value: string): void {
		this.router.navigate(['/list/'], { relativeTo: this.route })
	}
}