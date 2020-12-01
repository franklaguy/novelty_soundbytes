import 'angular2-meteor-polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app/app.module';
import '/both/methods/available.methods';
import '/both/methods/helper.methods';

Meteor.startup(() => {
	const platform = platformBrowserDynamic();

	enableProdMode();
	platform.bootstrapModule(AppModule);
});