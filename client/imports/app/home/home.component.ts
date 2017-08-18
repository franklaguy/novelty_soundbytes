import { Component, OnInit } from '@angular/core';
import template from './home.component.html';
import style from './home.component.scss';

@Component({
	selector: 'home',
	template,
	styles: [ style ]
})

export class HomeComponent implements OnInit { 
	constructor() {}

	ngOnInit() {  }

	openPage (value: string): void {
		window.open(value);
	}

	public isCollapsed: boolean = true;
}