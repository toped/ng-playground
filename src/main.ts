import { enableProdMode } from '@angular/core'; // core angular
// browser logic - enables angular to be rendered in a web browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // top level module in the system
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// These lines bootstraps the application into the web browser
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
