import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyServicesPageComponent } from './my-services-page.component';

const routes: Routes = [
  {
    path: '',
    component: MyServicesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyServicesPageRoutingModule {}
