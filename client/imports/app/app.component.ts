import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import template from './app.component.html';

@Component({
	selector: 'app',
  // template: '<router-outlet></router-outlet>',
  templateUrl: require('./app.component.html').default
})

export class AppComponent implements OnInit { 
  private isCordova : boolean;

	constructor(private router: Router) { 
    this.isCordova = Meteor.isCordova;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
         return;
      }
      
			const element = document.querySelector('.home, .mast');
			// element.scrollIntoView();
    });
  }
}