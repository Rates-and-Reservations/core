export interface CreateCustomerData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postcode?: string;
  country?: string;
  preferredLanguage?: string;
  preferredTimezone?: string;
  tags?: string[];
  notes?: string;
  metadata?: Record<string, any>;
}

export interface UpdateCustomerData {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  postcode?: string;
  country?: string;
  preferredLanguage?: string;
  preferredTimezone?: string;
  loyaltyPoints?: number;
  tags?: string[];
  notes?: string;
  metadata?: Record<string, any>;
}

export interface CustomerQueryFilters {
  page: number;
  limit: number;
  search?: string;
  tags?: string[];
  sortBy?: 'name' | 'email' | 'totalBookings' | 'totalSpent' | 'createdAt' | 'loyaltyPoints';
  sortOrder?: 'asc' | 'desc';
}

export interface CreateCustomerPreferenceData {
  key: string;
  value: string;
}

export interface UpdateCustomerPreferenceData {
  value: string;
}

export interface CustomerWithDetails {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postcode?: string;
  country?: string;
  preferredLanguage?: string;
  preferredTimezone?: string;
  loyaltyPoints: number;
  totalBookings: number;
  totalSpent: number;
  tags: string[];
  notes?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  
  // Related data
  bookings: CustomerBookingData[];
  preferences: Record<string, string>;
  
  // Counts
  bookingCount: number;
  activeWaitlistEntries: number;
}

export interface CustomerBookingData {
  id: string;
  startTime: Date;
  endTime: Date;
  currentStatus: string;
  totalPrice: number;
  currency: string;
  resource: {
    id: string;
    name: string;
  };
  rate: {
    id: string;
    name: string;
    price: number;
    currency: string;
  };
  createdAt: Date;
}

export interface CustomerListItem {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  country?: string;
  loyaltyPoints: number;
  totalBookings: number;
  totalSpent: number;
  tags: string[];
  createdAt: Date;
  
  // Counts
  bookingCount: number;
}

export interface CustomersListResponse {
  customers: CustomerListItem[];
  total: number;
}

export interface CustomerStats {
  totalCustomers: number;
  newCustomersThisMonth: number;
  topCustomers: TopCustomerData[];
  customerGrowth: CustomerGrowthData[];
}

export interface TopCustomerData {
  id: string;
  name: string;
  email: string;
  bookingCount: number;
  totalSpent: number;
  loyaltyPoints: number;
}

export interface CustomerGrowthData {
  month: Date;
  count: number;
}

export interface CustomerSearchResult {
  id: string;
  name: string;
  email: string;
  phone?: string;
  totalBookings: number;
  totalSpent: number;
}

export interface BulkCustomerImportResult {
  successful: any[];
  failed: Array<{
    data: CreateCustomerData;
    error: string;
  }>;
}

export interface CustomerExportData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postcode?: string;
  country?: string;
  preferredLanguage?: string;
  preferredTimezone?: string;
  totalBookings: number;
  totalSpent: number;
  loyaltyPoints: number;
  tags: string[];
  createdAt: Date;
}
