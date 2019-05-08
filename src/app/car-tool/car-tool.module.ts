import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarHomeComponent } from './components/car-home/car-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CarTableComponent } from './components/car-table/car-table.component';
import { CarTableRowComponent } from './components/car-table-row/car-table-row.component';
import { CarFormComponent } from './components/car-form/car-form.component';
import { FormBoxComponent } from './components/form-box/form-box.component';

@NgModule({
	declarations: [CarHomeComponent, CarTableComponent, CarTableRowComponent, CarFormComponent, FormBoxComponent],
	exports: [
		CarHomeComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule,
	]
})
export class CarToolModule { }
