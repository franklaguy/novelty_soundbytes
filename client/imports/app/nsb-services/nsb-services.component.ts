import { Component, OnInit } from '@angular/core';
import template from './nsb-services.component.html';
// import style from './nsb-services.component.scss'; 

@Component({
	selector: 'nsb-services',
	// template,
	templateUrl: require('./nsb-services.component.html').default,
	// styleUrls: [ './nsb-services.component.scss' ]
})

export class NSBServicesComponent implements OnInit {
	constructor() {}

	ngOnInit() { }
}