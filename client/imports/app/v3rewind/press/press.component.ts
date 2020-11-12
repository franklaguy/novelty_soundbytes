import { Component, OnInit } from '@angular/core';
import template from './press.component.html';
// import style from './press.component.scss';

@Component({
	selector: 'press',
	// template,
	templateUrl: require('./press.component.html').default,
	styles: [ './press.component.scss' ]
})

export class V3PressComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}