import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyServicesPageRoutingModule } from './my-services-page-routing.module';
import { MyServicesPageComponent } from './my-services-page.component';

@NgModule({
  declarations: [MyServicesPageComponent],
  imports: [CommonModule, MyServicesPageRoutingModule],
})
export class MyServicesPageModule {}
