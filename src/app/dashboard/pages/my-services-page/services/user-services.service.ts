import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  UserServiceInfo,
  UserServiceInfoResponse,
} from '../models/user-service-info.model';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  constructor(private http: HttpClient) {}

  public getCurrentUsersServices(): Observable<UserServiceInfo[]> {
    return this.http
      .get<UserServiceInfoResponse>('assets/mocks/Services.json')
      .pipe(map((serviceResponse) => serviceResponse.data));
  }
}
