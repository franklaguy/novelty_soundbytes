import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { InjectUser } from "angular2-meteor-accounts-ui";
import { MouseEvent } from "angular2-google-maps/core";
import 'rxjs/add/operator/map';
import { Available } from '/both/collections/available.collection';
import { AvailableModel } from '/both/models/available.model';
import { Users } from '/both/collections/users.collection';
import { User } from '/both/models/user.model';
import { CanActivate } from '@angular/router'; // POC: currently not using

@Component({
	selector: 'available-details',
	templateUrl: require('./available-details.component.html').default,
})

@InjectUser('user')
export class AvailableDetailsComponent implements OnInit, OnDestroy {
	detailsId: string;
	save: string;
	paramsSub: Subscription;
	availableModel: AvailableModel;
	detailsSub: Subscription;
	users: Observable<User>;
	uninvitedSub: Subscription;
	user: Meteor.User;
	imagesSubs: Subscription;

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.imagesSubs = MeteorObservable.subscribe('images').subscribe();
		this.save = "Save";

		this.paramsSub = this.route.params
			.map(params => params['detailsId'])
			.subscribe(detailsId => {
				this.detailsId = detailsId;

				if (this.detailsSub) {
					this.detailsSub.unsubscribe();
				}

				this.detailsSub = MeteorObservable.subscribe('availableModel', this.availableModel).subscribe(() => {
          MeteorObservable.autorun().subscribe(() => {
          	this.availableModel = Available.findOne(this.detailsId);
          	this.getUsers(this.availableModel);
          });
        });

        if (this.uninvitedSub){
        	this.uninvitedSub.unsubscribe();
        }

        this.uninvitedSub = MeteorObservable.subscribe('uninvited', this.detailsId).subscribe(() => {
        	this.getUsers(this.availableModel);
        });
			});
	}

	getUsers(availableModel:AvailableModel) {
		if (availableModel) {
			this.users = Users.find({
				_id: {
					$nin: availableModel.invited || [],
					$ne: Meteor.userId()
				}
			}).zone();
		}
	}

	saveDetails() {
		if(!Meteor.userId()) {
			alert('Please log in to update this available item');
		}

		this.save = "...Saving";

		Available.update(this.availableModel._id, {
			$set: {
				images: this.availableModel.images,
				name: this.availableModel.name,
				description: this.availableModel.description,
				credit: this.availableModel.credit,
				links: this.availableModel.links,
				'public': this.availableModel.public
			}
		});

		this.save = "Saved";
	}

	invite(user: Meteor.User) {
		MeteorObservable.call('invite', this.availableModel._id, user._id).subscribe(() => {
			alert('User notified');
		}, (error) => {
			alert(`Failed to notify due to ${error}`);
		});
	}

	reply(rsvp:string) {
		MeteorObservable.call('reply', this.availableModel._id, rsvp).subscribe(() => {
			alert('You successfully replied');
		}, (error) => {
			alert(`Failed to reply due to ${error}`);
		});
	}

	onImage(imageId: string) {
		this.availableModel.images.push(imageId);
	}

	deleteImage(imageId: string) {
		this.availableModel.images.splice( this.availableModel.images.indexOf(imageId), 1 );
	}

	get isOwner(): boolean {
		return this.availableModel && this.user && this.user._id === this.availableModel.owner;
	}

	get isPublic(): boolean {
		return this.availableModel && this.availableModel.public;
	}

	get isInvited(): boolean {
		if (this.availableModel && this.user) {
			const invited = this.availableModel.invited || [];

			return invited.indexOf(this.user._id) !== -1;
		}

		return false;
	}
	
	ngOnDestroy() {
		this.paramsSub.unsubscribe();
		this.detailsSub.unsubscribe();
		this.uninvitedSub.unsubscribe();
		this.imagesSubs.unsubscribe();
	}
	
}