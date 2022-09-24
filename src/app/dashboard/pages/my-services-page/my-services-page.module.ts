import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServicesPageRoutingModule } from './my-services-page-routing.module';
import { MyServicesPageComponent } from './my-services-page.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [MyServicesPageComponent],
  imports: [CommonModule, MyServicesPageRoutingModule, NzIconModule, NzGridModule],
})
export class MyServicesPageModule {}
