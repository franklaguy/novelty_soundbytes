import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MeteorObservable } from 'meteor-rxjs';
import { Profiles } from '/both/collections/profiles.collection';
import { ProfilesModel } from '/both/models/profiles.model';
import template from './profiles.component.html';
// import style from './profiles.component.scss';

@Component({
	selector: 'profiles',
	// template,
	templateUrl: require('./profiles.component.html').default,
	styles: [ './profiles.component.scss' ]
})

export class ProfilesComponent implements OnInit, OnDestroy {
	profile: number;
	margin: number = 0;
	activeProfile: string = '';
	profiles: Observable<ProfilesModel[]>;
	profilesSub: Subscription;

	ngOnInit () {
		this.profile = 1;

		if (this.profilesSub) {
			this.profilesSub.unsubscribe();
		}

		this.profilesSub = MeteorObservable.subscribe('profiles').subscribe(() => {
			this.profiles = Profiles.find().zone();
		});
	}

	nextBrick() {
		this.profile = this.profile + 1;
		let brick = '#id' + this.profile;
		this.margin = this.margin - 19;

		document.body.querySelector('img.active').classList.remove("active");
		document.body.querySelector(brick).classList.add("active");

		let elem = <HTMLElement>document.querySelector('.wrapper');

		if (elem) { // make sure element exists and can be found in DOM
			elem.style.left = this.margin+'rem';
		}

		return this.profile, this.margin;
	}

	prevBrick() {
		this.profile = this.profile - 1;
		let brick = '#id' + this.profile;
		this.margin = this.margin + 19;

		document.body.querySelector('img.active').classList.remove("active");
		document.body.querySelector(brick).classList.add("active");

		let elem = <HTMLElement>document.querySelector('.wrapper');

		if (elem) { // make sure element exists and can be found in DOM
			elem.style.left = this.margin+'rem';
		}
	
		return this.profile, this.margin;
	}

	ngOnDestroy() {
		this.profilesSub.unsubscribe();
	}

}