import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../../models/car';

@Component({
	selector: 'car-form',
	templateUrl: './car-form.component.html',
	styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

	carForm: FormGroup;

	@Input()
	buttonText = 'Submit Car';

	@Output()
	submitCar = new EventEmitter<Car>();

	constructor( private fb: FormBuilder ) { }

	ngOnInit() {
		this.carForm = this.fb.group({
			make: '',
			model: '',
			year: '',
			color: '',
			price: '',
		});
	}

	doSubmitCar() {
		this.submitCar.emit({ ...this.carForm.value });
		this.carForm.reset();
	}

}
