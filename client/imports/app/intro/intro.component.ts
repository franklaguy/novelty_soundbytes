import { Component, OnInit } from '@angular/core';
import template from './intro.component.html';
import style from './intro.component.scss';

@Component({
	selector: 'intro',
	template,
	styles: [ style ]
})

export class IntroComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}