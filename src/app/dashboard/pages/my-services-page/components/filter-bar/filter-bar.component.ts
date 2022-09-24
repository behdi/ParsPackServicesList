import { Component } from '@angular/core';
import { UserServiceFilter } from '../../models/user-service-filter.model';
import { ServiceType } from '../../models/user-service-info.model';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.less'],
})
export class FilterBarComponent {
  filterOptions: UserServiceFilter[] = [
    {
      name: 'همه‌ی سرویس‌ها',
      value: null,
      icon: '/assets/service-icons/all.svg',
      count: 24,
    },
    {
      name: 'Hosting',
      value: ServiceType.Hosting,
      icon: '/assets/service-icons/hosting.svg',
      count: 24,
    },
    {
      name: 'Domain',
      value: ServiceType.Domain,
      icon: '/assets/service-icons/domain.svg',
      count: 24,
    },
    {
      name: 'Server',
      value: ServiceType.Server,
      icon: '/assets/service-icons/server.svg',
      count: 24,
    },
    {
      name: 'SSL',
      value: ServiceType.SSL,
      icon: '/assets/service-icons/ssl.svg',
      count: 24,
    },
    {
      name: 'CDN',
      value: ServiceType.CDN,
      icon: '/assets/service-icons/cdn.svg',
      count: 24,
    },
    {
      name: 'سایر محصولات',
      value: ServiceType.Other,
      icon: '/assets/service-icons/other.svg',
      count: 24,
    },
  ];

  constructor() {}

  onTabSelect(selectedIdx: number) {
    console.log(this.filterOptions[selectedIdx]);
  }
}
