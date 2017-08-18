import { Component, OnInit } from '@angular/core';
import template from './about.component.html';
import style from './about.component.scss';

@Component({
	selector: 'about',
	template,
	styles: [ style ]
})

export class AboutComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}