import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { myRequiredValidator, emailOrPhoneValidator } from '../../../shared/validators/contact-validators';

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

	contactForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	get fistNameShowValidataionMsg() {
		const fistNameInput = this.contactForm.get('firstName') as FormControl;
		return fistNameInput.invalid && fistNameInput.touched;
	}

	get ageShowValidataionMsg() {
		const ageInput = this.contactForm.get('age') as FormControl;
		return ageInput.invalid && ageInput.touched;
	}

	get showValidataionSummary() {
		return this.contactForm.invalid;
	}

	ngOnInit() {
		this.contactForm = this.fb.group({
			firstName: ['', { validators: [myRequiredValidator] }],
			lastName: ['', { validators: [Validators.required, Validators.minLength(3)] }],
			age: [0, { validators: [Validators.required, Validators.min(13)] }],
			email: ['', { validators: [Validators.email] }],
			phone: [''],

		}, {
				validators: [emailOrPhoneValidator]
		});

		console.log();

	}

}
