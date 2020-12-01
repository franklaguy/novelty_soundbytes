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
	private isSafari: boolean;
	private w: any;

	resizeObservable$: Observable<Event>
	resizeSubscription$: Subscription

	constructor(
		private router: Router, private route: ActivatedRoute
	) {}

	ngOnInit() {
		
		this.isSafari = !!navigator.userAgent.match(/safari/i) 
								 && !navigator.userAgent.match(/chrome/i) 
								 && typeof document.body.style.webkitFilter !== "undefined" 
								 && !window["chrome"];

		let elem:HTMLElement = document.querySelector(".wvoe .navbar-toggleable-md .navbar-collapse") as HTMLElement;

		if(this.isSafari === true){
	    // Initialize
	    this.reportWindowSize();
			if(this.w < 992){
				elem.style.marginTop = "14.5em";
			}

			if(this.w > 992){
				elem.style.marginTop = "2em";
			}

			// On Resize
			this.resizeObservable$ = fromEvent(window, 'resize');
	    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {

      	this.w = window.innerWidth;

				if(this.w < 992){
					elem.style.marginTop = "14.5em";
				}

				if(this.w > 992){
					elem.style.marginTop = "2em";
	    	}
	    });
		}
	}

	search(value:string): void {
		this.router.navigate(['/list/'], { relativeTo: this.route })
	}

	reportWindowSize(){
	  this.w = document.documentElement.clientWidth;

	  return this.w;
	}
}