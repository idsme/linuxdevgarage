export interface User {
  settings?: any;
  userSettings?: any;
  defaults?: any;
  roleSettings?: any;
  accountDetails: AccountDetails;
  runtimeSettings?: any;
  orgUnit: OrgUnit;
  rolePermissions: RolePermission[];
  blockedPermissions?: any;
  eTag: string;
  location: Location;
  applicationRoles: ApplicationRole[];
}

export interface AccountDetails {
  userId: string;
  accountType: string;
  accountStatus: string;
  accountStartDate: number;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  title: string;
  corporateFunction: string;
  preferredLanguage: string;
  emailAddress: string;
  telephoneCountryCode: string;
  telephoneAreaCode: string;
  telephoneNumber: string;
}

export interface OrgUnit {
  orgUnitId: string;
  orgUnitType: string;
  teamManager: string;
  sisUnitCode: string;
}

export interface RolePermission {
  roleName: string;
  permissions: string[];
}

export interface Location {
  location: string;
  building: string;
  roomNumber: string;
  streetName: string;
  postalCode: string;
  city: string;
  area: string;
  country: string;
}

export interface ApplicationRole {
  roleName: string;
}



