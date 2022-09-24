import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {
  UserServiceInfoResponse,
  UserServiceMetadata,
} from '../models/user-service-info.model';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private http: HttpClient) {}

  public getCurrentUsersServices() {
    return this.http
      .get<UserServiceInfoResponse>('assets/mocks/Services.json')
      .pipe(
        map((res) => {
          return {
            data: res.data,
            metadata: res.data
              .map(({ type }) => type)
              .reduce((names: UserServiceMetadata, name) => {
                const count = names[name] || 0;
                names[name] = count + 1;
                return names;
              }, {}),
          };
        })
      );
  }
}
