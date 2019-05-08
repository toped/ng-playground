import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent
	],
	imports: [
		BrowserModule,
		ColorToolModule,
		CarToolModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
