import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'car-home',
	templateUrl: './car-home.component.html',
	styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

	headerText = 'Car Tool';
	carForm: FormGroup;

	cars = [
		{ id: 1, make: 'Jeep', model: 'Grand Cherokee', year: '2014', color: 'Black/Foresrt Green', price: 42000 },
		{ id: 2, make: 'Chrystler', model: '300', year: '2014', color: 'Black', price: 31000 },
	];

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.carForm = this.fb.group({
			make: '',
			model: '',
			year: '',
			color: '',
			price: '',
		});
	}

	addCar() {
		this.cars = this.cars.concat(
			{
				id: this.cars.length + 1,
				make: this.carForm.value.make,
				model: this.carForm.value.model,
				year: this.carForm.value.year,
				color: this.carForm.value.color,
				price: this.carForm.value.price,
			}
		);
		this.carForm.reset();
	}

}
