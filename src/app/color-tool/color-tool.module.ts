import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ColorHomeComponent } from './components/color-home/color-home.component';
import { SharedModule } from '../shared/shared.module';
import { ColorFormComponent } from './components/color-form/color-form.component';

// exports - exports declataions
// imports - imports modules
@NgModule({
	declarations: [ColorHomeComponent, ColorFormComponent],
	exports: [
		ColorHomeComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		SharedModule
	],
})
export class ColorToolModule { }
