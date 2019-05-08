import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'color-home',
	templateUrl: './color-home.component.html',
	styleUrls: ['./color-home.component.css'],
	encapsulation: ViewEncapsulation.Emulated
})
export class ColorHomeComponent implements OnInit {

	headerText = 'Color Tool';
	colors = [ 'green', 'blue', 'olive', 'crimson', 'purple' ];

	// private fb: FormBuilder;

	// constructor(fb: FormBuilder) {
	// 	this.fb = fb;
	// }

	constructor() { }

	ngOnInit() {
	}

	addColor(newColor: string) {
		this.colors = this.colors.concat(newColor);
		// this.colors.push(this.colorForm.value.newColor);
	}
}
