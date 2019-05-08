import { Component, OnInit, Input, Output, DoCheck, EventEmitter } from '@angular/core';
import { Car } from '../../models/car';

@Component({
	selector: '.car-table-row',
	templateUrl: './car-table-row.component.html',
	styleUrls: ['./car-table-row.component.css']
})
export class CarTableRowComponent implements OnInit, DoCheck {

	@Input()
	car: Car = null;

	@Output()
	deleteCar = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}

	ngDoCheck(): void {
		console.log('ran change detection in car view row');
	}

	doDeleteCar(carid: number) {
		this.deleteCar.emit(carid);
	}

}
