import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
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

  constructor(
    private hostingServices: UserServicesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.searchBar = new FormControl<string | null>(null);
  }

  ngOnInit(): void {
    const services$ = this.hostingServices.getCurrentUsersServices();
    this.selectedFilter$ = this.activatedRoute.queryParamMap.pipe(
      map((qParam) => qParam.get('filter') as ServiceType)
    );
    const searchParam$ = this.searchBar.valueChanges.pipe(
      startWith(''),
      debounceTime(900),
      distinctUntilChanged()
    );

    this.services$ = combineLatest([
      searchParam$,
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
  }
}
