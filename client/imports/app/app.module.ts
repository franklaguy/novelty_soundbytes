import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule }  from 'ng2-pagination';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { CollapseDirective } from 'ng2-bootstrap';
import { HOME_DECLARATIONS } from './home';
import { AVAILABLE_DECLARATIONS } from './available';
import { SHARED_DECLARATIONS } from './shared';
import { MaterialModule } from "@angular/material";
import { FileDropModule } from "angular2-file-drop";

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule, 
		ReactiveFormsModule,
		RouterModule.forRoot(routes),
		AccountsModule,
		Ng2PaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
    }),
    MaterialModule.forRoot(),
    FileDropModule
	],
	declarations: [ 
		AppComponent, 
		CollapseDirective, 
		...HOME_DECLARATIONS, 
		...AVAILABLE_DECLARATIONS, 
		...SHARED_DECLARATIONS 
	],
	providers: [ ...ROUTES_PROVIDERS ],
	bootstrap: [ AppComponent ]
})

export class AppModule{}