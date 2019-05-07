import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'color-home',
	templateUrl: './color-home.component.html',
	styleUrls: ['./color-home.component.css'],
	encapsulation: ViewEncapsulation.Emulated
})
export class ColorHomeComponent implements OnInit {

	headerText = 'Color Tool';
	colors = [ 'green', 'blue', 'olive', 'crimson', 'purple' ];
	colorForm: FormGroup;

	// private fb: FormBuilder;

	// constructor(fb: FormBuilder) {
	// 	this.fb = fb;
	// }

	constructor( private fb: FormBuilder ) { }

	ngOnInit() {
		this.colorForm = this.fb.group({
			newColor: '',
		});
	}

	addColor() {
		this.colors = this.colors.concat(this.colorForm.value.newColor);
		this.colorForm.reset();
	}
}
