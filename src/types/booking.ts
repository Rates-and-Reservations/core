import { BookingStatus } from '@prisma/client';

export interface CreateBookingData {
  customerId?: string; // Optional - can create booking without existing customer
  customerData?: CreateCustomerForBookingData; // If customer doesn't exist
  resourceId: string;
  rateId: string;
  startTime: Date;
  endTime: Date;
  partySize: number;
  addOnIds?: string[]; // Array of add-on IDs to include
  notes?: string;
  internalNotes?: string;
  metadata?: Record<string, any>;
  autoConfirm?: boolean; // Whether to automatically confirm the booking
}

export interface CreateCustomerForBookingData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  city?: string;
  postcode?: string;
  country?: string;
  preferredLanguage?: string;
  preferredTimezone?: string;
}

export interface UpdateBookingData {
  startTime?: Date;
  endTime?: Date;
  partySize?: number;
  notes?: string;
  internalNotes?: string;
  metadata?: Record<string, any>;
}

export interface BookingQueryFilters {
  page: number;
  limit: number;
  customerId?: string;
  resourceId?: string;
  status?: BookingStatus;
  startDate?: Date;
  endDate?: Date;
  search?: string; // Search in customer name, email, or booking notes
  sortBy?: 'startTime' | 'createdAt' | 'totalPrice' | 'currentStatus';
  sortOrder?: 'asc' | 'desc';
}

export interface BookingAvailabilityCheck {
  resourceId: string;
  startTime: Date;
  endTime: Date;
  partySize: number;
  excludeBookingId?: string; // For updates, exclude current booking
}

export interface BookingAvailabilityResult {
  isAvailable: boolean;
  conflicts?: BookingConflict[];
  suggestions?: AvailabilitySlot[];
}

export interface BookingConflict {
  type: 'capacity' | 'availability_block' | 'booking_constraint';
  message: string;
  details?: any;
}

export interface AvailabilitySlot {
  startTime: Date;
  endTime: Date;
  availableCapacity: number;
}

export interface BookingPricingCalculation {
  basePrice: number;
  addOnTotal: number;
  subtotal: number;
  taxAmount: number;
  totalPrice: number;
  currency: string;
  breakdown: PricingBreakdown[];
}

export interface PricingBreakdown {
  item: string;
  type: 'rate' | 'addon' | 'tax' | 'discount';
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface BookingWithDetails {
  id: string;
  merchantId: string;
  customerId?: string;
  resourceId: string;
  rateId: string;
  startTime: Date;
  endTime: Date;
  partySize: number;
  basePrice: number;
  totalPrice: number;
  taxAmount: number;
  currency: string;
  currentStatus: BookingStatus;
  notes?: string;
  internalNotes?: string;
  metadata?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
  
  // Related data
  customer?: BookingCustomerData;
  resource: BookingResourceData;
  rate: BookingRateData;
  addOns: BookingAddOnData[];
  payments: BookingPaymentData[];
  
  // Calculated fields
  duration: number; // in minutes
  isPast: boolean;
  isCancellable: boolean;
  isModifiable: boolean;
}

export interface BookingCustomerData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  preferredLanguage?: string;
  preferredTimezone?: string;
}

export interface BookingResourceData {
  id: string;
  name: string;
  description?: string;
  capacity: number;
  minDuration: number;
  maxDuration: number;
  isVirtual: boolean;
  serviceLocation?: {
    id: string;
    name: string;
    address: string;
    city: string;
  };
}

export interface BookingRateData {
  id: string;
  name: string;
  description?: string;
  price: number;
  currency: string;
  durationType: string;
  taxType: string;
  taxAmount: number;
}

export interface BookingAddOnData {
  id: string;
  addOnId: string;
  addOnName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface BookingPaymentData {
  id: string;
  amount: number;
  currency: string;
  status: string;
  provider: string;
  providerPaymentId: string;
  createdAt: Date;
}

export interface BookingListItem {
  id: string;
  startTime: Date;
  endTime: Date;
  partySize: number;
  totalPrice: number;
  currency: string;
  currentStatus: BookingStatus;
  createdAt: Date;
  
  customer?: {
    id: string;
    name: string;
    email: string;
  };
  resource: {
    id: string;
    name: string;
  };
  rate: {
    id: string;
    name: string;
  };
  
  // Calculated fields
  duration: number;
  isPast: boolean;
}

export interface BookingsListResponse {
  bookings: BookingListItem[];
  total: number;
}

export interface BookingStatusUpdate {
  status: BookingStatus;
  reason?: string;
  internalNotes?: string;
}

export interface BookingStats {
  totalBookings: number;
  confirmedBookings: number;
  pendingBookings: number;
  cancelledBookings: number;
  completedBookings: number;
  totalRevenue: number;
  averageBookingValue: number;
  bookingGrowth: BookingGrowthData[];
  topResources: TopResourceData[];
}

export interface BookingGrowthData {
  period: string; // e.g., "2024-01", "2024-01-15"
  bookingCount: number;
  revenue: number;
}

export interface TopResourceData {
  resourceId: string;
  resourceName: string;
  bookingCount: number;
  revenue: number;
  utilizationRate: number;
}

export interface CreateBookingRequest {
  // Guest booking (no existing customer)
  customer?: CreateCustomerForBookingData;
  // Existing customer booking
  customerId?: string;
  // Booking details
  resourceId: string;
  rateId: string;
  startTime: string; // ISO datetime string
  endTime: string;   // ISO datetime string
  partySize: number;
  addOnIds?: string[];
  notes?: string;
  // Payment
  paymentIntentId?: string; // If payment was pre-authorized
  autoConfirm?: boolean;
}

export interface BookingValidationError {
  field: string;
  message: string;
  code: string;
}

export interface BookingValidationResult {
  isValid: boolean;
  errors: BookingValidationError[];
  warnings?: string[];
}

// Booking flow states for complex bookings
export interface BookingFlow {
  id: string;
  merchantId: string;
  templateId?: string;
  currentStep: string;
  stepData: Record<string, any>;
  expiresAt: Date;
  status: 'INITIATED' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'EXPIRED';
}

// Calendar/schedule view types
export interface BookingCalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resourceId: string;
  resourceName: string;
  customerName?: string;
  status: BookingStatus;
  color?: string;
  allDay: boolean;
}

export interface BookingCalendarView {
  events: BookingCalendarEvent[];
  dateRange: {
    start: Date;
    end: Date;
  };
  resources: {
    id: string;
    name: string;
    color?: string;
  }[];
}