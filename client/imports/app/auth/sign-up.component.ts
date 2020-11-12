import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';
import template from './sign-up.component.html';
// import style from './login.component.scss';

@Component({
	selector: 'sign-up',
	// template,
  templateUrl: require('./sign-up.component.html').default,
  // styles: [ './login.component.scss' ]
})

export class SignUpComponent implements OnInit {
	signUpForm: FormGroup;
	error: string;

	constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.signUpForm = this.formBuilder.group({
			email: ['', Validators.required ],
			password: ['', Validators.required ]
		});

		this.error = '';
	}

  createAcct() {
    Accounts.createUser({
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    }, (err) => {
      if (err) {
        this.zone.run(() => {
          this.error = err.toString();
        });
      } else {
        this.router.navigate(['/list/']);
      }
    });
  }

	signUp() {
    switch(this.signUpForm.value.email){
      case 'frankleegitnit@nsbweb.com':
      case 'kjF09zXsf4@nsbweb.com': // b
      case 'kjF07zXsf3@nsbweb.com': // k
        if (this.signUpForm.value.password.length < 8) {
          return this.error = 'Password too short';
        }
        this.createAcct();
        break;
      default:
        return this.error = 'Not Authorized';
    }
  }
}