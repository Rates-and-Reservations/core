import { z } from 'zod';

export const createCustomerSchema = z.object({
  name: z.string().min(1, 'Customer name is required').max(255),
  email: z.string().email('Invalid email format'),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  postcode: z.string().optional(),
  country: z.string().length(2, 'Country must be a 2-letter ISO code').optional(),
  preferredLanguage: z.string().max(10).optional(),
  preferredTimezone: z.string().max(50).optional(),
  tags: z.array(z.string()).default([]),
  notes: z.string().optional(),
  metadata: z.record(z.any()).optional(),
});

export const updateCustomerSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  postcode: z.string().optional(),
  country: z.string().length(2).optional(),
  preferredLanguage: z.string().max(10).optional(),
  preferredTimezone: z.string().max(50).optional(),
  loyaltyPoints: z.number().int().min(0).optional(),
  tags: z.array(z.string()).optional(),
  notes: z.string().optional(),
  metadata: z.record(z.any()).optional(),
});

export const customerQuerySchema = z.object({
  page: z.string().optional().default('1').transform(val => parseInt(val)),
  limit: z.string().optional().default('20').transform(val => parseInt(val)),
  search: z.string().optional(),
  tags: z.union([z.string(), z.array(z.string())]).optional(),
  sortBy: z.enum(['name', 'email', 'totalBookings', 'totalSpent', 'createdAt', 'loyaltyPoints']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
}).refine(data => data.limit <= 100, {
  message: 'Limit cannot exceed 100',
  path: ['limit'],
});

export const createCustomerPreferenceSchema = z.object({
  key: z.string().min(1, 'Preference key is required').max(50),
  value: z.string().min(1, 'Preference value is required').max(500),
});

export const updateCustomerPreferenceSchema = z.object({
  value: z.string().min(1, 'Preference value is required').max(500),
});

export const customerSearchSchema = z.object({
  q: z.string().min(1, 'Search term is required'),
  limit: z.string().optional().default('10').transform(val => parseInt(val)),
}).refine(data => data.limit <= 50, {
  message: 'Search limit cannot exceed 50',
  path: ['limit'],
});

export const bulkCreateCustomersSchema = z.object({
  customers: z.array(createCustomerSchema).min(1, 'At least one customer is required').max(1000, 'Cannot import more than 1000 customers at once'),
});

export const customerEmailQuerySchema = z.object({
  email: z.string().email('Invalid email format'),
});

// Common validation patterns
export const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
export const timezoneRegex = /^[A-Za-z_]+\/[A-Za-z_]+$/;

// Enhanced validation schemas with business rules
export const createCustomerWithValidationSchema = createCustomerSchema.extend({
  phone: z.string().regex(phoneRegex, 'Invalid phone number format').optional(),
  preferredTimezone: z.string().regex(timezoneRegex, 'Invalid timezone format').optional(),
}).refine(data => {
  // At least one contact method is required (email is always required, but phone or address as backup)
  return data.email || data.phone;
}, {
  message: 'At least email is required for customer contact',
  path: ['email'],
});

export const updateCustomerWithValidationSchema = updateCustomerSchema.extend({
  phone: z.string().regex(phoneRegex, 'Invalid phone number format').optional(),
  preferredTimezone: z.string().regex(timezoneRegex, 'Invalid timezone format').optional(),
});

// Tag validation
export const customerTagSchema = z.object({
  tag: z.string().min(1, 'Tag is required').max(50, 'Tag too long'),
});

// Preference key validation (common preference keys)
export const commonPreferenceKeys = [
  'preferred_time',
  'notification_method',
  'dietary_requirements',
  'accessibility_needs',
  'special_requests',
  'communication_language',
  'booking_notifications',
  'marketing_emails',
  'sms_notifications',
  'reminder_timing',
] as const;

export const createCommonPreferenceSchema = z.object({
  key: z.enum(commonPreferenceKeys),
  value: z.string().min(1).max(500),
});

// Customer import validation
export const csvImportSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional(),
  city: z.string().optional(),
  postcode: z.string().optional(),
  country: z.string().length(2).optional(),
  preferredLanguage: z.string().max(10).optional(),
  preferredTimezone: z.string().max(50).optional(),
  tags: z.string().optional(), // Comma-separated string that will be split
  notes: z.string().optional(),
}).transform(data => ({
  ...data,
  tags: data.tags ? data.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0) : [],
}));

// Statistics query validation
export const customerStatsQuerySchema = z.object({
  period: z.enum(['week', 'month', 'quarter', 'year']).optional().default('month'),
  includeGrowth: z.string().optional().transform(val => val === 'true'),
  includeTopCustomers: z.string().optional().transform(val => val === 'true'),
});
