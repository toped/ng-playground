import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
	declarations: [
		ContactFormComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
	],
	exports: [
		ContactFormComponent,
	],
})
export class FormDemoModule { }
