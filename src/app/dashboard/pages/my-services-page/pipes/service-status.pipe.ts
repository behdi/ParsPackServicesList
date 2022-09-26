import { Pipe, PipeTransform } from '@angular/core';
import { ServiceStatus } from '../models/user-service-info.model';
import { UserServiceStatus } from '../models/user-service-status.model';

@Pipe({
  name: 'serviceStatus',
})
export class ServiceStatusPipe implements PipeTransform {
  transform(status: ServiceStatus): UserServiceStatus {
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
