import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { Gallery } from '/both/collections/gallery.collection';
import { GalleryModel } from '/both/models/gallery.model';
import template from './gallery.component.html';

@Component({
	selector: 'gallery',
	templateUrl: require('./gallery.component.html').default,
})

export class GalleryComponent implements OnInit, OnDestroy {
	scene: number;
	gallery: Observable<GalleryModel[]>;
	gallerySub: Subscription;

	constructor() {}

	ngOnInit () {
		this.scene = 1;

		if (this.gallerySub) {
			this.gallerySub.unsubscribe();
		}

		this.gallerySub = MeteorObservable.subscribe('gallery').subscribe(() => {
			this.gallery = Gallery.find({}).zone();
		});
	}

	getScene(s) {
		let scene = '#id' + s;

		document.body.querySelector('.active').classList.remove("active");
		document.body.querySelector(scene).classList.add("active");

		return this.scene = s;
	}

	nextScene(s) {
		let scene = s + 1;

		return this.getScene(scene);
	}

	prevScene(s) {
		let scene = s - 1;
		
		return this.getScene(scene);
	}

	ngOnDestroy() {
		this.gallerySub.unsubscribe();
	}
}