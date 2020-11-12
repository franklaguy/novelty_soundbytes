import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { Cards } from '/both/collections/cards.collection';
import { CardsModel } from '/both/models/cards.model';
import template from './media.component.html';
// import style from './media.component.scss';

@Component({
	selector: 'media',
	// template,
	templateUrl: require('./media.component.html').default,
	styles: [ './media.component.scss' ]
})

export class V3MediaComponent implements OnInit {
	cards: Observable<CardsModel[]>;
	cardsSub: Subscription;

	constructor() {}

	ngOnInit() {
		if (this.cardsSub) {
			this.cardsSub.unsubscribe();
		}

		this.cardsSub = MeteorObservable.subscribe('cards').subscribe(() => {
			this.cards = Cards.find().zone();
		});
	}

	ngOnDestroy() {
		this.cardsSub.unsubscribe();
	}

	public readMore: boolean = false;
	public readLess: boolean = true;
	public counter: number = 1;

	nextCard() {
		if (this.counter < 60) {
			return this.counter += 1;
		} else {
			return this.counter = 60;
		}
	}
}