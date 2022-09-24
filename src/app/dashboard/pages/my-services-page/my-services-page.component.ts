import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  combineLatest,
  concatMap,
  groupBy,
  map,
  mergeMap,
  Observable,
  of,
  reduce,
  scan,
  startWith,
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
  searchBar: FormControl<string | null>;
  services$!: Observable<{
    data: UserServiceInfo[];
    metadata: UserServiceMetadata;
  }>;
  selectedFilter$!: Observable<ServiceType | null>;
  searchParam$: Observable<string | null>;

  constructor(
    private hostingServices: UserServicesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchBar = new FormControl<string | null>(null);
    this.searchParam$ = this.searchBar.valueChanges.pipe(startWith(''));
  }

  ngOnInit(): void {
    const services$ = this.hostingServices.getCurrentUsersServices();
    this.selectedFilter$ = this.activatedRoute.queryParamMap.pipe(
      map((qParam) => qParam.get('filter') as ServiceType)
    );

    this.services$ = combineLatest([
      this.searchParam$,
      this.selectedFilter$,
      services$,
    ]).pipe(
      map(([searchQuery, filter, serviceList]) => {
        return {
          ...serviceList,
          data: serviceList.data.filter(
            (data) =>
              (filter ? data.type === filter : data.type) &&
              data.name.includes(searchQuery ?? '')
          ),
        };
      })
    );
    this.services$.subscribe(console.log);
  }
}
