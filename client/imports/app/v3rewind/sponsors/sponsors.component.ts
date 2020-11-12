import { Component, OnInit } from '@angular/core';
import template from './sponsors.component.html';
// import style from './sponsors.component.scss'; 

@Component({
	selector: 'sponsors',
	// template,
	templateUrl: require('./sponsors.component.html').default,
	styles: [ './sponsors.component.scss' ]
})

export class V3SponsorsComponent implements OnInit {
	constructor() {}

	ngOnInit() { }
}