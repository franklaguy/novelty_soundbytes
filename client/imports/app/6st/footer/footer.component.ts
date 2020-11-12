import { Component, OnInit } from '@angular/core';
import template from './footer.component.html';
// import style from './footer.component.scss';

@Component({
	selector: 'sst-footer',
	// template,
	templateUrl: require('./footer.component.html').default,
	styles: [ './footer.component.scss' ]
})

export class SSTFooterComponent implements OnInit {
	constructor () {}

	ngOnInit () {}
}