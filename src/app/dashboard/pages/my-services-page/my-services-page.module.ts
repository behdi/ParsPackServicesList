import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServicesPageRoutingModule } from './my-services-page-routing.module';
import { MyServicesPageComponent } from './my-services-page.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyServicesPageComponent, FilterBarComponent],
  imports: [
    CommonModule,
    MyServicesPageRoutingModule,
    NzIconModule,
    NzGridModule,
    SharedModule,
    NzTabsModule,
    NzRadioModule,
    FormsModule
  ],
})
export class MyServicesPageModule {}
