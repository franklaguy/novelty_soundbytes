import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'v3rewind',
	templateUrl: require('./v3.component.html').default,
})

export class V3Component implements OnInit { 
	constructor() {}

	ngOnInit() {  }

	openPage (value: string): void {
		window.open(value);
	}

	public isCollapsed: boolean = true;
}