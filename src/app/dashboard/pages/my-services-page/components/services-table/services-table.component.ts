import { Component, Input } from '@angular/core';
import {
  ServiceStatus,
  UserServiceInfo,
} from '../../models/user-service-info.model';
import { UserServiceStatus } from '../../models/user-service-status.model';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.less'],
})
export class ServicesTableComponent {
  @Input() servicesList!: UserServiceInfo[];

  constructor() {}

  getServiceStatusData(status: ServiceStatus): UserServiceStatus {
    switch (status) {
      case 'Active':
        return { color: 'green', action: 'مدیریت سرویس' };
      case 'Pending':
        return { color: 'orange', action: 'مشاهده فاکتور' };
      case 'Cancelled':
        return { color: 'red', action: 'لغو شده' };
    }
  }
}
