import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'wvoe-custom-nav',
	templateUrl: require('./custom-nav.component.html').default
})

export class WVOECustomNavComponent implements OnInit {
	public isCollapsed: boolean = true; // Default: close Nav Panel

	constructor(
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {}

	search(value:string): void {
		this.router.navigate(['/list/'], { relativeTo: this.route })
	}
}