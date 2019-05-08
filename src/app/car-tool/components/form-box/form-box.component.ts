import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'form-box',
	templateUrl: './form-box.component.html',
	styleUrls: ['./form-box.component.css']
})
export class FormBoxComponent implements OnInit {

	funForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.funForm = this.fb.group({
			newText: '',
			newLength: '',
		});
	}

}
