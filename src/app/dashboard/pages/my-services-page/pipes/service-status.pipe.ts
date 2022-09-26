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
        return { color: '#44D3A7', action: 'مدیریت سرویس' };
      case 'Pending':
        return { color: '#FFBA1F', action: 'مشاهده فاکتور' };
      case 'Cancelled':
        return { color: '#FE6A93', action: 'لغو شده' };
    }
  }
}
