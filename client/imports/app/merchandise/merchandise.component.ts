import { Component, OnInit } from '@angular/core';
import template from './merchandise.component.html';
import style from './merchandise.component.scss';

@Component({
	selector: 'merchandise',
	template,
	styles: [ style ]
})

export class MerchandiseComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}