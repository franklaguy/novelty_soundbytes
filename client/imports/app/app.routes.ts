import { Route, RouterModule } from '@angular/router';
import { Meteor } from 'meteor/meteor';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { AboutComponent } from './about/about.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { ContactComponent } from './contact/contact.component';
import { AvailableListComponent } from './available/available-list.component';
import { AvailableDetailsComponent } from './available/available-details.component';

export const routes: Route[] = [
	{ path: '', component: HomeComponent },
	{ path: 'introduction', component: IntroComponent },
	{ path: 'synopsis', component: SynopsisComponent },
	{ path: 'about-the-author', component: AboutComponent },
	{ path: 'merchandise', component: MerchandiseComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'list', component: AvailableListComponent },
	{ path: 'details/:detailsId', component: AvailableDetailsComponent, canActivate: ['canActivateForLoggedIn'] }
];

export const ROUTES_PROVIDERS = [{
	provide: 'canActivateForLoggedIn',
	useValue: () => !! Meteor.userId()
}];