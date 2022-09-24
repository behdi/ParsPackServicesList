import { Component, Input } from '@angular/core';
import { UserServiceInfo } from '../../models/user-service-info.model';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.less'],
})
export class ServicesTableComponent {
  @Input() servicesList!: UserServiceInfo[];

  constructor() {}
}
