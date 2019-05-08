import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { MyEllipsisPipe } from './pipes/my-ellipsis.pipe';

@NgModule({
	declarations: [
		ToolHeaderComponent,
		MyUppercasePipe,
		MyAppendPipe,
		MyEllipsisPipe,
	],
	exports: [
		ToolHeaderComponent,
		MyUppercasePipe,
		MyAppendPipe,
		MyEllipsisPipe,
	],
	imports: [
		CommonModule
	]
})
export class SharedModule { }
