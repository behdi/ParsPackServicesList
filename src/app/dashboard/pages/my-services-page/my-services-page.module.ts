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
import { ServicesTableComponent } from './components/services-table/services-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { ServiceStatusPipe } from './pipes/service-status.pipe';

@NgModule({
  declarations: [
    MyServicesPageComponent,
    FilterBarComponent,
    ServicesTableComponent,
    ServiceStatusPipe,
  ],
  imports: [
    CommonModule,
    MyServicesPageRoutingModule,
    NzIconModule,
    NzGridModule,
    SharedModule,
    NzTabsModule,
    NzRadioModule,
    NzTableModule,
    FormsModule,
    NzButtonModule,
    NzBadgeModule,
  ],
})
export class MyServicesPageModule {}
