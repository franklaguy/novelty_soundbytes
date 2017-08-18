import { Component, OnInit } from '@angular/core';
import template from './contact.component.html';
import style from './contact.component.scss';

@Component({
	selector: 'contact',
	template,
	styles: [ style ]
})

export class ContactComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}