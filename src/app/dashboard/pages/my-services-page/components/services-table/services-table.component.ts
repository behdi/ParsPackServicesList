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
  readonly sortByName = (a: UserServiceInfo, b: UserServiceInfo) =>
    a.name.localeCompare(b.name);

  constructor() {}
}
