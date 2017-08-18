import { Component, OnInit } from '@angular/core';
import template from './synopsis.component.html';
import style from './synopsis.component.scss'; 

@Component({
	selector: 'synopsis',
	template,
	styles: [ style ]
})

export class SynopsisComponent implements OnInit {
	constructor() {}

	ngOnInit() { }
}