import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
declare var sprintf: any;


if (environment.production) {
  enableProdMode();
  console.log(sprintf("%s %s!", "Check", "Done!"));
}

platformBrowserDynamic().bootstrapModule(AppModule);
