import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { MOTORComponent } from './motor/motor.component';
import { IgViewComponent } from './ig-view/ig-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'motor', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'motor', component: MOTORComponent, data: { text: 'Motor' } },
  { path: 'ig-view', component: IgViewComponent, data: { text: 'Ig-View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
