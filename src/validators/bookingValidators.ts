import { z } from 'zod';
import { BookingStatus } from '@prisma/client';

export const createBookingSchema = z.object({
  // Customer info - either existing customer or new customer data
  customerId: z.string().optional(),
  customerData: z.object({
    name: z.string().min(1, 'Customer name is required'),
    email: z.string().email('Valid email is required'),
    phone: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    postcode: z.string().optional(),
    country: z.string().length(2).optional(),
    preferredLanguage: z.string().optional(),
    preferredTimezone: z.string().optional(),
  }).optional(),
  
  // Booking details
  resourceId: z.string().min(1, 'Resource ID is required'),
  rateId: z.string().min(1, 'Rate ID is required'),
  startTime: z.string().datetime('Invalid start time format').transform(val => new Date(val)),
  endTime: z.string().datetime('Invalid end time format').transform(val => new Date(val)),
  partySize: z.number().int().min(1, 'Party size must be at least 1').max(1000, 'Party size too large'),
  
  // Optional fields
  addOnIds: z.array(z.string()).default([]),
  notes: z.string().optional(),
  internalNotes: z.string().optional(),
  metadata: z.record(z.any()).optional(),
  autoConfirm: z.boolean().default(false),
}).refine(data => {
  // Must have either customerId or customerData
  return data.customerId || data.customerData;
}, {
  message: 'Either customerId or customerData is required',
  path: ['customerId'],
}).refine(data => {
  // End time must be after start time
  return data.endTime > data.startTime;
}, {
  message: 'End time must be after start time',
  path: ['endTime'],
}).refine(data => {
  // Booking must be in the future (at least 5 minutes)
  const fiveMinutesFromNow = new Date(Date.now() + 5 * 60 * 1000);
  return data.startTime >= fiveMinutesFromNow;
}, {
  message: 'Booking must be at least 5 minutes in the future',
  path: ['startTime'],
});

export const updateBookingSchema = z.object({
  startTime: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  endTime: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  partySize: z.number().int().min(1).max(1000).optional(),
  notes: z.string().optional(),
  internalNotes: z.string().optional(),
  metadata: z.record(z.any()).optional(),
}).refine(data => {
  // If both times are provided, end time must be after start time
  if (data.startTime && data.endTime) {
    return data.endTime > data.startTime;
  }
  return true;
}, {
  message: 'End time must be after start time',
  path: ['endTime'],
});

export const bookingQuerySchema = z.object({
  page: z.string().optional().default('1').transform(val => parseInt(val)),
  limit: z.string().optional().default('20').transform(val => parseInt(val)),
  customerId: z.string().optional(),
  resourceId: z.string().optional(),
  status: z.nativeEnum(BookingStatus).optional(),
  startDate: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  endDate: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  search: z.string().optional(),
  sortBy: z.enum(['startTime', 'createdAt', 'totalPrice', 'currentStatus']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
}).refine(data => data.limit <= 100, {
  message: 'Limit cannot exceed 100',
  path: ['limit'],
}).refine(data => {
  // If both dates are provided, end date must be after start date
  if (data.startDate && data.endDate) {
    return data.endDate >= data.startDate;
  }
  return true;
}, {
  message: 'End date must be after or equal to start date',
  path: ['endDate'],
});

export const updateBookingStatusSchema = z.object({
  status: z.nativeEnum(BookingStatus),
  reason: z.string().optional(),
  internalNotes: z.string().optional(),
});

export const cancelBookingSchema = z.object({
  reason: z.string().optional(),
});

export const availabilityCheckSchema = z.object({
  resourceId: z.string().min(1, 'Resource ID is required'),
  startTime: z.string().datetime('Invalid start time format'),
  endTime: z.string().datetime('Invalid end time format'),
  partySize: z.string().transform(val => parseInt(val)).refine(val => val >= 1 && val <= 1000, {
    message: 'Party size must be between 1 and 1000',
  }),
  excludeBookingId: z.string().optional(),
}).refine(data => {
  const startTime = new Date(data.startTime);
  const endTime = new Date(data.endTime);
  return endTime > startTime;
}, {
  message: 'End time must be after start time',
  path: ['endTime'],
});

export const pricingCalculationSchema = z.object({
  resourceId: z.string().min(1, 'Resource ID is required'),
  rateId: z.string().min(1, 'Rate ID is required'),
  startTime: z.string().datetime('Invalid start time format').transform(val => new Date(val)),
  endTime: z.string().datetime('Invalid end time format').transform(val => new Date(val)),
  partySize: z.number().int().min(1).max(1000),
  addOnIds: z.array(z.string()).default([]),
}).refine(data => {
  return data.endTime > data.startTime;
}, {
  message: 'End time must be after start time',
  path: ['endTime'],
});

export const calendarQuerySchema = z.object({
  startDate: z.string().datetime('Invalid start date format'),
  endDate: z.string().datetime('Invalid end date format'),
  resourceIds: z.union([z.string(), z.array(z.string())]).optional(),
}).refine(data => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  return endDate >= startDate;
}, {
  message: 'End date must be after or equal to start date',
  path: ['endDate'],
}).refine(data => {
  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  const daysDiff = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
  return daysDiff <= 365; // Max 1 year range
}, {
  message: 'Date range cannot exceed 365 days',
  path: ['endDate'],
});

export const bulkStatusUpdateSchema = z.object({
  bookingIds: z.array(z.string()).min(1, 'At least one booking ID is required').max(100, 'Cannot update more than 100 bookings at once'),
  status: z.nativeEnum(BookingStatus),
  reason: z.string().optional(),
});

export const exportBookingsSchema = z.object({
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  status: z.nativeEnum(BookingStatus).optional(),
  resourceId: z.string().optional(),
}).refine(data => {
  if (data.startDate && data.endDate) {
    const startDate = new Date(data.startDate);
    const endDate = new Date(data.endDate);
    return endDate >= startDate;
  }
  return true;
}, {
  message: 'End date must be after or equal to start date',
  path: ['endDate'],
});

// Guest booking schema (simplified for public booking forms)
export const guestBookingSchema = z.object({
  // Customer info (always required for guest bookings)
  customer: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Valid email is required'),
    phone: z.string().min(1, 'Phone is required'),
  }),
  
  // Booking details
  resourceId: z.string().min(1, 'Resource selection is required'),
  rateId: z.string().min(1, 'Rate selection is required'),
  startTime: z.string().datetime().transform(val => new Date(val)),
  endTime: z.string().datetime().transform(val => new Date(val)),
  partySize: z.number().int().min(1).max(50), // Smaller limit for guest bookings
  
  // Optional
  addOnIds: z.array(z.string()).default([]),
  notes: z.string().max(500).optional(),
  
  // Terms acceptance
  acceptTerms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine(data => data.endTime > data.startTime, {
  message: 'End time must be after start time',
  path: ['endTime'],
});

// Booking validation for specific time slots
export const timeSlotValidationSchema = z.object({
  resourceId: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format'),
  timeSlot: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Time must be in HH:MM format'),
  duration: z.number().int().min(15).max(480), // 15 minutes to 8 hours
  partySize: z.number().int().min(1).max(1000),
});

// Advanced booking filters for analytics
export const bookingAnalyticsSchema = z.object({
  period: z.enum(['week', 'month', 'quarter', 'year']).default('month'),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  resourceIds: z.array(z.string()).optional(),
  includeRevenue: z.boolean().default(true),
  includeGrowth: z.boolean().default(true),
  groupBy: z.enum(['day', 'week', 'month']).optional(),
});

// Recurring booking schema (for future implementation)
export const recurringBookingSchema = z.object({
  // Base booking data
  resourceId: z.string().min(1),
  rateId: z.string().min(1),
  customerId: z.string().min(1),
  startTime: z.string().datetime().transform(val => new Date(val)),
  endTime: z.string().datetime().transform(val => new Date(val)),
  partySize: z.number().int().min(1),
  
  // Recurrence pattern
  recurrence: z.object({
    frequency: z.enum(['daily', 'weekly', 'monthly']),
    interval: z.number().int().min(1).max(12), // Every X days/weeks/months
    daysOfWeek: z.array(z.number().int().min(0).max(6)).optional(), // For weekly
    dayOfMonth: z.number().int().min(1).max(31).optional(), // For monthly
    endDate: z.string().datetime().transform(val => new Date(val)),
    maxOccurrences: z.number().int().min(1).max(52).optional(), // Max 52 occurrences
  }),
  
  // Booking preferences
  autoConfirm: z.boolean().default(false),
  skipConflicts: z.boolean().default(false), // Skip if slot not available
  notifyConflicts: z.boolean().default(true),
});

// Validation helpers for time-based constraints
export const validateBookingTime = (startTime: Date, endTime: Date, minDuration: number = 15) => {
  const durationMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);
  return durationMinutes >= minDuration;
};

export const validateBusinessHours = (startTime: Date, endTime: Date, businessHours: { start: string; end: string }) => {
  const startHour = startTime.getHours() + startTime.getMinutes() / 60;
  const endHour = endTime.getHours() + endTime.getMinutes() / 60;
  const businessStart = parseFloat(businessHours.start.replace(':', '.'));
  const businessEnd = parseFloat(businessHours.end.replace(':', '.'));
  
  return startHour >= businessStart && endHour <= businessEnd;
};

// Custom validation messages
export const validationMessages = {
  required: 'This field is required',
  invalidEmail: 'Please enter a valid email address',
  invalidPhone: 'Please enter a valid phone number',
  pastDate: 'Date cannot be in the past',
  invalidTimeRange: 'End time must be after start time',
  exceedsCapacity: 'Party size exceeds resource capacity',
  conflictingBooking: 'Time slot conflicts with existing booking',
  outsideBusinessHours: 'Booking time is outside business hours',
  minimumDuration: 'Booking duration is below minimum requirement',
  maximumDuration: 'Booking duration exceeds maximum allowed',
  advanceBookingLimit: 'Booking is too far in advance',
  lastMinuteRestriction: 'Booking is too close to current time',
};
