import { Component, OnInit } from '@angular/core';
import template from './six-strange-tales.component.html';
// import style from './six-strange-tales.component.scss';

@Component({
	selector: 'six-strange-tales',
	// template,
	templateUrl: require('./six-strange-tales.component.html').default,
	styles: [ './six-strange-tales.component.scss' ]
})

export class SixStrangeTalesComponent implements OnInit { 
	constructor() {}

	ngOnInit() {  }

	openPage (value: string): void {
		window.open(value);
	}

	public isCollapsed: boolean = true;
}