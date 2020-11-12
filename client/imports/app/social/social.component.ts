import { Component, OnInit } from '@angular/core';
import template from './social.component.html';
// import style from './social.component.scss';

@Component({
	selector: 'social',
	templateUrl: require('./social.component.html').default,
	// template,
	// styles: [ './social.component.scss' ] 
})

export class SocialComponent implements OnInit {
	constructor () {}

	ngOnInit () {}
}