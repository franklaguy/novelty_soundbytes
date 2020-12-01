import { Meteor } from 'meteor/meteor';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';

Meteor.methods({
	resizeSafari: function helper(page: string, resizeWeb: string, resizeMobile: string) {
		if (Meteor.isClient){
			let isSafari = !!navigator.userAgent.match(/safari/i) 
								     && !navigator.userAgent.match(/chrome/i) 
								 		 && typeof document.body.style.webkitFilter !== "undefined" 
								 		 && !window["chrome"];

			let elem:HTMLElement = document.querySelector("."+page+" .navbar-toggleable-md .navbar-collapse") as HTMLElement;
		
			if(isSafari === true){
				// Initialize
				let windowSize = Meteor.call('reportWindowSize');
				
				if(windowSize < 992){
					elem.style.marginTop = resizeMobile;
				}

				if(windowSize > 992){
					elem.style.marginTop = resizeWeb;
				}

				// On Resize
				let resizeObservable$ = fromEvent(window, 'resize');
				let resizeSubscription$ = resizeObservable$.subscribe( evt => { 
					windowSize = window.innerWidth;

					if(windowSize < 992){
						elem.style.marginTop = resizeMobile;
					}

					if(windowSize > 992){
						elem.style.marginTop = resizeWeb;
		    	}
				});
			}
		}
	},
	reportWindowSize: function(){
		let w = document.documentElement.clientWidth;

		return w;
	}
});