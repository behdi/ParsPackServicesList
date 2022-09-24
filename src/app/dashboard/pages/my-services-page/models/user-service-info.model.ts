export interface UserServiceInfoResponse {
  success: boolean;
  message: string;
  errors: [];
  data: UserServiceInfo[];
  metadata: UserServiceMetadata;
}

export interface UserServiceInfo {
  name: string;
  type: ServiceType;
  id: number;
  status: ServiceStatus;
  nextduedate: string;
  amount: string;
  invoiceUrl: string | null;
}

export enum ServiceType {
  CDN = 'CDN',
  Hosting = 'Hosting',
  SSL = 'SSl',
  Server = 'Server',
  Domain = 'Domain',
  Other = 'Other',
}

export type ServiceStatus = 'Active' | 'Pending' | 'Cancelled';

export type UserServiceMetadata = {
  [key in ServiceType]?: number;
};
