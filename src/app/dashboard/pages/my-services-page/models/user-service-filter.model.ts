import { ServiceType } from './user-service-info.model';

export interface UserServiceFilter {
  name: string;
  value: ServiceType | null;
  icon: string;
}
