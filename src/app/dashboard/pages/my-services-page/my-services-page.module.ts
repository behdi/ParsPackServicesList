import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServicesPageRoutingModule } from './my-services-page-routing.module';
import { MyServicesPageComponent } from './my-services-page.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@NgModule({
  declarations: [MyServicesPageComponent],
  imports: [
    CommonModule,
    MyServicesPageRoutingModule,
    NzIconModule,
    NzGridModule,
    SharedModule,
    NzSegmentedModule,
  ],
})
export class MyServicesPageModule {}
