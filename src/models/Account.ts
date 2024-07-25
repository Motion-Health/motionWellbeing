export type Account = {
  logo: string;
  accountId: string;
  serviceProviderName?: string;
  mainContactName?: string;
  mainContactRole?: string;
  phoneNumber?: string;
  city?: string;
  email: string;
  isPartOfAGroup?: string;
  groupName?: string;
  accountStatus:
    | "noAccess"
    | "standard"
    | "group"
    | "premium"
    | "admin"
    | "gis";
  createdAt?: string;
  lastLogin?: string;
  activitiesCompleted?: number;
  UserRole?: string;
};
