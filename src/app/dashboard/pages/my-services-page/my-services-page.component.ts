import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  concatMap,
  groupBy,
  map,
  mergeMap,
  Observable,
  of,
  reduce,
  scan,
  tap,
  toArray,
  zip,
} from 'rxjs';
import {
  ServiceType,
  UserServiceInfo,
  UserServiceMetadata,
} from './models/user-service-info.model';
import { UserServicesService } from './services/user-services.service';

@Component({
  selector: 'app-my-services-page',
  templateUrl: './my-services-page.component.html',
  styleUrls: ['./my-services-page.component.less'],
})
export class MyServicesPageComponent implements OnInit {
  searchBar = new FormControl<string | null>(null);
  services$!: Observable<{
    data: UserServiceInfo[];
    metadata: UserServiceMetadata;
  }>;
  constructor(private hostingServices: UserServicesService) {}

  ngOnInit(): void {
    this.services$ = this.hostingServices.getCurrentUsersServices();
    this.services$
      .pipe(map((r) => r.metadata))
      .subscribe((res) => console.log(res[ServiceType.CDN]));
  }
}
