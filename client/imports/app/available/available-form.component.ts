import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Available } from '/both/collections/available.collection';
import { Meteor } from 'meteor/meteor';
import template from './available-form.component.html';
// import style from './available-form.component.scss';

@Component({
	selector: 'available-form',
	// template,
	templateUrl: require('./available-form.component.html').default,
	// styles: [ './available-form.component.scss' ]
})

export class AvailableFormComponent implements OnInit {
	addForm: FormGroup;
	images: string[] = [];
	uploadItem: string;

	constructor(
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      credit: ['', Validators.required],
      description: ['', Validators.required],
      links: this.formBuilder.group({
      	digital: this.formBuilder.group({
		      seller: ['', Validators.required], 
		      link: ['', Validators.required],
      	}),
	      other: this.formBuilder.group({
		      seller: [], 
		      link: [],
      	}),
	      other2: this.formBuilder.group({
		      seller: [], 
		      link: [],
      	}),
	      other3: this.formBuilder.group({
		      seller: [], 
		      link: [],
      	}),
      }),
      public: [false]
    });

    this.uploadItem = "Upload Item";
  }

	addAvailable(): void {
		if(!Meteor.userId()) {
			alert('Please log in to add available item');
			return;
		}

		this.uploadItem = "...Uploading Item";

		if (this.addForm.valid) {
			Available.insert({
				name: this.addForm.value.name,
				credit: this.addForm.value.credit,
				description: this.addForm.value.description,
				links: { 
					digital: {
						seller: this.addForm.value.links.digital.seller, 
						link: this.addForm.value.links.digital.link
					}, 
					other: {
						seller: this.addForm.value.links.other.seller, 
						link: this.addForm.value.links.other.link
					}, 
					other2: {
						seller: this.addForm.value.links.other2.seller, 
						link: this.addForm.value.links.other2.link
					}, 
					other3: {
						seller: this.addForm.value.links.other3.seller, 
						link: this.addForm.value.links.other3.link
					}
				},
				images: this.images,
				public: this.addForm.value.public,
				owner: Meteor.userId()
			});

			this.addForm.reset();
		}

		this.uploadItem = "Uploaded Item";
	}

	onImage(imageId: string) {
		this.images.push(imageId);
	}
}