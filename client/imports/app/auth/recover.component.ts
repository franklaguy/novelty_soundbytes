import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';
import template from './recover.component.html';
// import style from './login.component.scss';

@Component({
	selector: 'recover',
	// template,
	templateUrl: require('./recover.component.html').default,
	// styles: [ './login.component.scss' ]
})

export class RecoverComponent implements OnInit {
	recoverForm: FormGroup;
	error: string;
	
	constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.recoverForm = this.formBuilder.group({
			email: ['', Validators.required]
		});

		this.error = '';
	}

	recover() {
		if (this.recoverForm.valid) {
			Accounts.forgotPassword({
				email: this.recoverForm.value.email
			}, (err) => {
				if (err) {
					this.zone.run(() => {
						this.error = err.toString();
					});
				} else {
					this.router.navigate(['/']);
				}
			});
		}
	}
}