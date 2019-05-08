import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../models/car';

@Component({
	selector: 'car-home',
	templateUrl: './car-home.component.html',
	styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

	headerText = 'Car Tool';

	cars: Car[] = [
		{ id: 1, make: 'Jeep', model: 'Grand Cherokee', year: 2014, color: 'Black/Foresrt Green', price: 42000 },
		{ id: 2, make: 'Chrystler', model: '300', year: 2014, color: 'Black', price: 31000 },
	];

	constructor() {

	}

	ngOnInit() {
		
	}

	addCar(newCar: Car) {
		this.cars = this.cars.concat({
			...newCar,
			id: Math.max(...this.cars.map(c => c.id), 0) + 1,
		});
	}

	doDeleteCar(carid: number) {
		this.cars = this.cars.filter(c => c.id !== carid);
	}
	// addCar() {
	// 	this.cars = this.cars.concat(
	// 		{
	// 			id: this.cars.length + 1,
	// 			make: this.carForm.value.make,
	// 			model: this.carForm.value.model,
	// 			year: this.carForm.value.year,
	// 			color: this.carForm.value.color,
	// 			price: this.carForm.value.price,
	// 		}
	// 	);
	// 	this.carForm.reset();
	// }

}
