import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Ng2PaginationModule }  from 'ng2-pagination';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import { routes, ROUTES_PROVIDERS } from './app.routes';
import { CollapseDirective } from 'ng2-bootstrap';
import { AUTH_DECLARATIONS } from './auth';
import { HOME_DECLARATIONS } from './home';
import { SIXSTRANGETALES_DECLARATIONS } from './6st/six-strange-tales';
import { V3_DECLARATIONS } from './v3rewind/verseatility';
import { WVOE_DECLARATIONS } from './wvoe';
import { AVAILABLE_DECLARATIONS } from './available';
import { SHARED_DECLARATIONS } from './shared';
import { FileDropModule } from "angular2-file-drop";

@NgModule({
	imports: [ 
		BrowserModule, 
		SafePipeModule,
		FormsModule, 
		ReactiveFormsModule,
		RouterModule.forRoot(routes),
		AccountsModule,
		Ng2PaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
    }),
    FileDropModule
	],
	declarations: [ 
		AppComponent, 
		CollapseDirective, 
		...AUTH_DECLARATIONS,
		...HOME_DECLARATIONS, 
		...SIXSTRANGETALES_DECLARATIONS,
		...V3_DECLARATIONS,
		...WVOE_DECLARATIONS,
		...AVAILABLE_DECLARATIONS, 
		...SHARED_DECLARATIONS 
	],
	providers: [ ...ROUTES_PROVIDERS ],
	bootstrap: [ AppComponent ]
})

export class AppModule{}