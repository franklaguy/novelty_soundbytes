import { Component, OnInit } from '@angular/core';
import template from './about.component.html';
// import style from './about.component.scss';

@Component({
	selector: 'about',
	templateUrl: require('./about.component.html').default,
	// template,
	styles: [ './about.component.scss' ]
})

export class SSTAboutComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}