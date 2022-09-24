import { Component, Input } from '@angular/core';
import { UserServiceFilter } from '../../models/user-service-filter.model';
import {
  ServiceType,
  UserServiceMetadata,
} from '../../models/user-service-info.model';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.less'],
})
export class FilterBarComponent {
  @Input() servicesMetadata!: UserServiceMetadata;
  filterOptions: UserServiceFilter[] = [
    {
      name: 'همه‌ی سرویس‌ها',
      value: null,
      icon: '/assets/service-icons/all.svg',
    },
    {
      name: 'Hosting',
      value: ServiceType.Hosting,
      icon: '/assets/service-icons/hosting.svg',
    },
    {
      name: 'Domain',
      value: ServiceType.Domain,
      icon: '/assets/service-icons/domain.svg',
    },
    {
      name: 'Server',
      value: ServiceType.Server,
      icon: '/assets/service-icons/server.svg',
    },
    {
      name: 'SSL',
      value: ServiceType.SSL,
      icon: '/assets/service-icons/ssl.svg',
    },
    {
      name: 'CDN',
      value: ServiceType.CDN,
      icon: '/assets/service-icons/cdn.svg',
    },
    {
      name: 'سایر محصولات',
      value: ServiceType.Other,
      icon: '/assets/service-icons/other.svg',
    },
  ];

  constructor() {}

  onTabSelect(selectedIdx: number) {
    console.log(this.filterOptions[selectedIdx]);
  }

  getTotalServices() {
    return Object.values(this.servicesMetadata).reduce(
      (acc, curr) => acc + curr
    );
  }
}
