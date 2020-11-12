import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
	selector: 'home',
	templateUrl: require('./home.component.html').default,
})

export class HomeComponent implements OnInit {
	embed: any[];

	constructor(private sanitizer: DomSanitizer) {}

	ngOnInit() {
		this.embed = [{
			'youTube': this.sanitizer.bypassSecurityTrustResourceUrl('//www.youtube.com/embed/kczJSMXL5iE?rel=0&autoplay=1')
		}]
	}

	openPage (value: string): void {
		window.open(value);
	}

	public isCollapsed: boolean = true;
	public youTube: boolean = true;
}