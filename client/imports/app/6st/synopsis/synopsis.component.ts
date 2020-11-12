import { Component, OnInit } from '@angular/core';
import template from './synopsis.component.html';
// import style from './synopsis.component.scss'; 

@Component({
	selector: 'synopsis',
	// template,
	templateUrl: require('./synopsis.component.html').default,
	styles: [ './synopsis.component.scss' ]
})

export class SSTSynopsisComponent implements OnInit {
	constructor() {}

	ngOnInit() { }
}