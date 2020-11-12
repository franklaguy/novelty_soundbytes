import { Component, OnInit } from '@angular/core';
import template from './intro.component.html';
// import style from './intro.component.scss';

@Component({
	selector: 'intro',
	// template,
	templateUrl: require('./intro.component.html').default,
	styles: [ './intro.component.scss' ]
})

export class SSTIntroComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}