import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

/**
 * Routes module.
 */
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        title: environment.nameApp,
        pathMatch: 'full',
        loadChildren: () =>
          import('./dashboard/dashboard-routing.module').then(
            (m) => m.DashboardRoutingModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
