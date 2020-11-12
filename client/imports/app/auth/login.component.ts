import { Component, OnInit, NgZone, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Meteor } from 'meteor/meteor';;

@Component({
	selector: 'login',
	templateUrl: require('./login.component.html').default,
})

export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	error: string;

	constructor( private router: Router, private zone: NgZone, private formBuilder: FormBuilder) {}

	ngOnInit () {
		this.loginForm = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});

		this.error = '';
	}
	
	login() {
    if (this.loginForm.valid) {
      Meteor.loginWithPassword(this.loginForm.value.email, this.loginForm.value.password, (err) => {
        this.zone.run(() => {
          if (err) {
            this.error = err.toString();
          } else {
            this.router.navigate(['/list/']);
          }
        });
      });
    }
  }
}
