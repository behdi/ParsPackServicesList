import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    children: [
      {
        path: 'my-services',
        loadChildren: () =>
          import('./pages/my-services-page/my-services-page.module').then(
            (m) => m.MyServicesPageModule
          ),
      },
      { path: '', redirectTo: 'services', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
