import { Route, Routes, RouterModule } from '@angular/router';
import { Meteor } from 'meteor/meteor';

import { LoginComponent } from './auth/login.component';
import { SignUpComponent } from './auth/sign-up.component';
import { RecoverComponent } from './auth/recover.component';

// Novelty Soundbytes
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who-we-are/who-we-are.component';
import { NSBServicesComponent } from './nsb-services/nsb-services.component';
import { ContactComponent } from './contact/contact.component';
import { AvailableListComponent } from './available/available-list.component';
import { AvailableDetailsComponent } from './available/available-details.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { AboutComponent } from './about/about.component';

// Six Strange Tales
import { SixStrangeTalesComponent } from './6st/six-strange-tales/six-strange-tales.component';
import { SSTIntroComponent } from './6st/intro/intro.component';
import { SSTSynopsisComponent } from './6st/synopsis/synopsis.component';
import { SSTAboutComponent } from './6st/about/about.component';
// VerseAtility
import { V3Component } from './v3rewind/verseatility/v3.component';
import { V3PressComponent } from './v3rewind/press/press.component';
import { V3SponsorsComponent } from './v3rewind/sponsors/sponsors.component';
import { V3MediaComponent } from './v3rewind/media/media.component';

// WVOE
import { WVOEComponent } from './wvoe/wvoe.component';

export const routes: Route[] = [
	{ path: 'login', component: LoginComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'recover', component: RecoverComponent },
	{ path: '', component: HomeComponent },
	{ path: 'who-we-are', component: WhoComponent },
	{ path: 'nsb-services', component: NSBServicesComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'list', component: AvailableListComponent },
	{ path: 'details/:detailsId', component: AvailableDetailsComponent },
	// { path: 'details/:detailsId', component: AvailableDetailsComponent, canActivate: ['canActivateForLoggedIn'] },
	{ path: 'synopsis', component: SynopsisComponent },
	{ path: 'about-the-author', component: AboutComponent },

	// SIX STRANGE TALES
	{ path: 'six-strange-tales', component: SixStrangeTalesComponent },
	{ path: 'six-strange-tales/introduction', component: SSTIntroComponent },
	{ path: 'six-strange-tales/synopsis', component: SSTSynopsisComponent },
	{ path: 'six-strange-tales/about-the-author', component: SSTAboutComponent },

	// VerseAtility
	{ path: 'v3rewind', component: V3Component },
	{ path: 'v3rewind/press', component: V3PressComponent },
	{ path: 'v3rewind/sponsors', component: V3SponsorsComponent },
	{ path: 'v3rewind/media', component: V3MediaComponent },

	// WVOE
	{ path: 'wvoe', component: WVOEComponent }
];

export const ROUTES_PROVIDERS = [{
	provide: 'canActivateForLoggedIn',
	useValue: () => !! Meteor.userId()
}];