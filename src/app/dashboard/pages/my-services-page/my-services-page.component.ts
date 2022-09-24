import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  concatMap,
  groupBy,
  map,
  mergeMap,
  of,
  reduce,
  scan,
  tap,
  toArray,
  zip,
} from 'rxjs';
import { ServiceType } from './models/user-service-info.model';
import { UserServicesService } from './services/user-services.service';

@Component({
  selector: 'app-my-services-page',
  templateUrl: './my-services-page.component.html',
  styleUrls: ['./my-services-page.component.less'],
})
export class MyServicesPageComponent implements OnInit {
  searchBar = new FormControl<string | null>(null);

  constructor(private hostingServices: UserServicesService) {}

  ngOnInit(): void {
    this.hostingServices
      .getCurrentUsersServices()
      .pipe(
        map((res) => {
          return {
            ...res,
            metadata: res.data
              .map(({ type }) => type)
              .reduce((names: { [k in ServiceType]?: number }, name) => {
                const count = names[name] || 0;
                names[name] = count + 1;
                return names;
              }, {}),
          };
        }),
        tap((res) => console.log(res))
      )
      .subscribe();
  }
}
