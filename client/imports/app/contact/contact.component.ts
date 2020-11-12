import { Component, OnInit } from '@angular/core';
import template from './contact.component.html';
// import style from './contact.component.scss';

@Component({
	selector: 'contact',
	// template,
	templateUrl: require('./contact.component.html').default,
	// styles: [ './contact.component.scss' ]
})

export class ContactComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}