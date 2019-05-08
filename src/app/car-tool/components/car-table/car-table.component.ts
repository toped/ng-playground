import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car';

@Component({
	selector: 'car-table',
	templateUrl: './car-table.component.html',
	styleUrls: ['./car-table.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush, // Detects changes on the inputs of the components. This is why we should use immutable programming.
})
export class CarTableComponent implements OnInit {

	@Input()
	cars: Car[] = [];

	@Output()
	deleteCar = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}

	doDeleteCar(carid: number) {
		this.deleteCar.emit(carid);
	}

}
