import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Available } from '/both/collections/available.collection';
import { Meteor } from 'meteor/meteor';
import template from './available-form.component.html';
import style from './available-form.component.scss';

@Component({
	selector: 'available-form',
	template,
	styles: [ style ]
})

export class AvailableFormComponent implements OnInit {
	addForm: FormGroup;
	images: string[] = [];

	constructor(
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      digital: [],
      paperback: [],
      hardcover: [],
      reviews: [],
      public: [false]
    });
  }

	addAvailable(): void {
		if(!Meteor.userId()) {
			alert('Please log in to add available item');
			return;
		}

		if (this.addForm.valid) {
			Available.insert({
				name: this.addForm.value.name,
				description: this.addForm.value.description,
				links: { 
					digital: this.addForm.value.digital, 
					paperback: this.addForm.value.paperback, 
					hardcover: this.addForm.value.hardcover 
				},
				reviews: this.addForm.value.reviews,
				images: this.images,
				public: this.addForm.value.public,
				owner: Meteor.userId()
			});

			this.addForm.reset();
		}
	}

	onImage(imageId: string) {
		this.images.push(imageId);
	}
}