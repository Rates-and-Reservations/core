import { BlockType, ConstraintType } from '@prisma/client';

export interface CreateResourceData {
  name: string;
  description?: string;
  capacity: number;
  minDuration?: number;
  maxDuration?: number;
  bufferTime?: number;
  serviceLocationId?: string;
  location?: LocationData;
  serviceArea?: ServiceAreaData;
  isVirtual?: boolean;
  metadata?: Record<string, any>;
  tags?: string[];
  templateId?: string;
}

export interface UpdateResourceData {
  name?: string;
  description?: string;
  capacity?: number;
  minDuration?: number;
  maxDuration?: number;
  bufferTime?: number;
  serviceLocationId?: string;
  location?: LocationData;
  serviceArea?: ServiceAreaData;
  isVirtual?: boolean;
  metadata?: Record<string, any>;
  tags?: string[];
  isActive?: boolean;
}

export interface ResourceQueryFilters {
  page: number;
  limit: number;
  search?: string;
  isActive?: boolean;
}

export interface LocationData {
  lat?: number;
  lng?: number;
  address?: string;
  city?: string;
  country?: string;
  postcode?: string;
}

export interface ServiceAreaData {
  type: 'radius' | 'polygon' | 'custom';
  radius?: number; // in kilometers
  center?: { lat: number; lng: number };
  polygon?: Array<{ lat: number; lng: number }>;
  customData?: Record<string, any>;
}

export interface CreateAvailabilityBlockData {
  startTime: Date;
  endTime: Date;
  blockType: BlockType;
  reason?: string;
  isRecurring?: boolean;
  recurrenceRule?: RecurrenceRule;
}

export interface UpdateAvailabilityBlockData {
  startTime?: Date;
  endTime?: Date;
  blockType?: BlockType;
  reason?: string;
  isRecurring?: boolean;
  recurrenceRule?: RecurrenceRule;
  isActive?: boolean;
}

export interface RecurrenceRule {
  freq: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
  interval?: number;
  count?: number;
  until?: Date;
  byDay?: string[]; // ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']
  byMonthDay?: number[];
  byMonth?: number[];
}

export interface CreateAvailabilityRuleData {
  dayOfWeek: number; // 0-6, Sunday = 0
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  validFrom?: Date;
  validTo?: Date;
}

export interface UpdateAvailabilityRuleData {
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
  validFrom?: Date;
  validTo?: Date;
  isActive?: boolean;
}

export interface CreateBookingConstraintData {
  constraintType: ConstraintType;
  value: ConstraintValue;
  description?: string;
}

export interface UpdateBookingConstraintData {
  constraintType?: ConstraintType;
  value?: ConstraintValue;
  description?: string;
  isActive?: boolean;
}

export type ConstraintValue = 
  | TimeConstraintValue 
  | CountConstraintValue 
  | BlackoutDatesValue;

export interface TimeConstraintValue {
  hours: number;
  unit?: 'hours' | 'days';
}

export interface CountConstraintValue {
  count: number;
  period?: 'per_day' | 'per_week' | 'per_month' | 'total';
}

export type BlackoutDatesValue = string[]; // Array of ISO date strings

export interface AvailabilitySlot {
  date: Date;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
  totalCapacity: number;
  usedCapacity: number;
  availableCapacity: number;
  isBlocked: boolean;
  blockedReason?: string;
}

export interface ResourceAvailability {
  resourceId: string;
  startDate: Date;
  endDate: Date;
  capacity: number;
  availabilitySlots: AvailabilitySlot[];
  availabilityRules: AvailabilityRuleData[];
  blockedPeriods: AvailabilityBlockData[];
  existingBookings: ExistingBookingData[];
}

export interface AvailabilityRuleData {
  id: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  validFrom?: Date;
  validTo?: Date;
  isActive: boolean;
}

export interface AvailabilityBlockData {
  id: string;
  startTime: Date;
  endTime: Date;
  blockType: BlockType;
  reason?: string;
  isRecurring: boolean;
  isActive: boolean;
}

export interface ExistingBookingData {
  startTime: Date;
  endTime: Date;
  partySize: number;
}

export interface ResourceAssetData {
  id: string;
  name: string;
  type: string;
  url: string;
  publicId: string;
  isPrimary: boolean;
  sortOrder: number;
  createdAt: Date;
}

export interface CreateResourceAssetData {
  name: string;
  type: string;
  url: string;
  publicId: string;
  isPrimary?: boolean;
  sortOrder?: number;
}

export interface UpdateResourceAssetData {
  isPrimary?: boolean;
  sortOrder?: number;
}

export interface ResourceWithDetails {
  id: string;
  name: string;
  description?: string;
  capacity: number;
  minDuration: number;
  maxDuration: number;
  bufferTime: number;
  isVirtual: boolean;
  isActive: boolean;
  location?: LocationData;
  serviceArea?: ServiceAreaData;
  metadata?: Record<string, any>;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  
  // Related data
  template?: {
    id: string;
    name: string;
    category: string;
  };
  serviceLocation?: {
    id: string;
    name: string;
    city: string;
  };
  rates: ResourceRateData[];
  availabilityRules: AvailabilityRuleData[];
  availabilityBlocks: AvailabilityBlockData[];
  bookingConstraints: BookingConstraintData[];
  assets: ResourceAssetData[];
  
  // Counts
  bookingCount: number;
  rateCount: number;
  upcomingBookings: number;
}

export interface ResourceRateData {
  id: string;
  name: string;
  price: number;
  currency: string;
  durationType: string;
  isDefault: boolean;
}

export interface BookingConstraintData {
  id: string;
  constraintType: ConstraintType;
  value: ConstraintValue;
  description?: string;
  isActive: boolean;
}

export interface ResourceListItem {
  id: string;
  name: string;
  description?: string;
  capacity: number;
  isActive: boolean;
  isVirtual: boolean;
  tags: string[];
  createdAt: Date;
  
  template?: {
    id: string;
    name: string;
    category: string;
  };
  serviceLocation?: {
    id: string;
    name: string;
    city: string;
  };
  rates: {
    id: string;
    name: string;
    price: number;
    currency: string;
    durationType: string;
    isDefault: boolean;
  }[];
  
  // Counts
  bookingCount: number;
  rateCount: number;
}

export interface ResourcesListResponse {
  resources: ResourceListItem[];
  total: number;
}