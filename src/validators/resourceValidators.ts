import { z } from 'zod';
import { BlockType, ConstraintType } from '@prisma/client';

export const createResourceSchema = z.object({
  name: z.string().min(1, 'Resource name is required').max(255),
  description: z.string().optional(),
  capacity: z.number().int().min(1, 'Capacity must be at least 1'),
  minDuration: z.number().int().min(15, 'Minimum duration must be at least 15 minutes').default(60),
  maxDuration: z.number().int().min(15, 'Maximum duration must be at least 15 minutes').default(480),
  bufferTime: z.number().int().min(0, 'Buffer time cannot be negative').default(0),
  serviceLocationId: z.string().optional(),
  location: z.any().optional(), // JSON field
  serviceArea: z.any().optional(), // JSON field
  isVirtual: z.boolean().default(false),
  metadata: z.any().optional(), // JSON field
  tags: z.array(z.string()).default([]),
  templateId: z.string().optional(),
}).refine(data => data.maxDuration >= data.minDuration, {
  message: 'Maximum duration must be greater than or equal to minimum duration',
  path: ['maxDuration'],
});

export const updateResourceSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  capacity: z.number().int().min(1).optional(),
  minDuration: z.number().int().min(15).optional(),
  maxDuration: z.number().int().min(15).optional(),
  bufferTime: z.number().int().min(0).optional(),
  serviceLocationId: z.string().optional(),
  location: z.any().optional(),
  serviceArea: z.any().optional(),
  isVirtual: z.boolean().optional(),
  metadata: z.any().optional(),
  tags: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
}).refine(data => {
  if (data.maxDuration && data.minDuration) {
    return data.maxDuration >= data.minDuration;
  }
  return true;
}, {
  message: 'Maximum duration must be greater than or equal to minimum duration',
  path: ['maxDuration'],
});

export const resourceQuerySchema = z.object({
  page: z.string().optional().default('1').transform(val => parseInt(val)),
  limit: z.string().optional().default('20').transform(val => parseInt(val)),
  search: z.string().optional(),
  isActive: z.string().optional().transform(val => val === 'true'),
});

export const createAvailabilityBlockSchema = z.object({
  startTime: z.string().datetime('Invalid start time format').transform(val => new Date(val)),
  endTime: z.string().datetime('Invalid end time format').transform(val => new Date(val)),
  blockType: z.nativeEnum(BlockType),
  reason: z.string().optional(),
  isRecurring: z.boolean().default(false),
  recurrenceRule: z.any().optional(), // JSON field for RRULE
}).refine(data => data.endTime > data.startTime, {
  message: 'End time must be after start time',
  path: ['endTime'],
});

export const updateAvailabilityBlockSchema = z.object({
  startTime: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  endTime: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  blockType: z.nativeEnum(BlockType).optional(),
  reason: z.string().optional(),
  isRecurring: z.boolean().optional(),
  recurrenceRule: z.any().optional(),
  isActive: z.boolean().optional(),
}).refine(data => {
  if (data.startTime && data.endTime) {
    return data.endTime > data.startTime;
  }
  return true;
}, {
  message: 'End time must be after start time',
  path: ['endTime'],
});

export const createAvailabilityRuleSchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6), // 0 = Sunday, 6 = Saturday
  startTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  endTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  validFrom: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  validTo: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
}).refine(data => data.endTime > data.startTime, {
  message: 'End time must be after start time',
  path: ['endTime'],
}).refine(data => {
  if (data.validFrom && data.validTo) {
    return data.validTo > data.validFrom;
  }
  return true;
}, {
  message: 'Valid to date must be after valid from date',
  path: ['validTo'],
});

export const updateAvailabilityRuleSchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6).optional(),
  startTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
  endTime: z.string().regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/).optional(),
  validFrom: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  validTo: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  isActive: z.boolean().optional(),
}).refine(data => {
  if (data.startTime && data.endTime) {
    return data.endTime > data.startTime;
  }
  return true;
}, {
  message: 'End time must be after start time',
  path: ['endTime'],
}).refine(data => {
  if (data.validFrom && data.validTo) {
    return data.validTo > data.validFrom;
  }
  return true;
}, {
  message: 'Valid to date must be after valid from date',
  path: ['validTo'],
});

export const createBookingConstraintSchema = z.object({
  constraintType: z.nativeEnum(ConstraintType),
  value: z.any(), // JSON field - validation depends on constraint type
  description: z.string().optional(),
}).superRefine((data, ctx) => {
  // Validate based on constraint type
  switch (data.constraintType) {
    case ConstraintType.MIN_ADVANCE_BOOKING:
    case ConstraintType.MAX_ADVANCE_BOOKING:
    case ConstraintType.BUFFER_TIME:
      if (typeof data.value !== 'object' || typeof data.value.hours !== 'number') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Value must be an object with hours property for time-based constraints',
          path: ['value'],
        });
      }
      break;
    case ConstraintType.MAX_BOOKINGS_PER_DAY:
    case ConstraintType.MAX_BOOKINGS_PER_WEEK:
    case ConstraintType.CAPACITY_LIMIT:
    case ConstraintType.MINIMUM_PARTY_SIZE:
    case ConstraintType.MAXIMUM_PARTY_SIZE:
      if (typeof data.value !== 'object' || typeof data.value.count !== 'number' || data.value.count < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Value must be an object with count property (minimum 1) for count-based constraints',
          path: ['value'],
        });
      }
      break;
    case ConstraintType.BLACKOUT_DATES:
      if (!Array.isArray(data.value) || !data.value.every((date: any) => typeof date === 'string')) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Value must be an array of date strings for blackout dates',
          path: ['value'],
        });
      }
      break;
  }
});

export const updateBookingConstraintSchema = z.object({
  constraintType: z.nativeEnum(ConstraintType).optional(),
  value: z.any().optional(),
  description: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const availabilityQuerySchema = z.object({
  startDate: z.string().datetime('Invalid start date format').transform(val => new Date(val)),
  endDate: z.string().datetime('Invalid end date format').transform(val => new Date(val)),
}).refine(data => data.endDate > data.startDate, {
  message: 'End date must be after start date',
  path: ['endDate'],
});

export const uploadAssetSchema = z.object({
  name: z.string().min(1, 'Asset name is required'),
  type: z.string().min(1, 'Asset type is required'),
  url: z.string().url('Invalid URL'),
  publicId: z.string().min(1, 'Public ID is required'),
  isPrimary: z.boolean().default(false),
  sortOrder: z.number().int().min(0).default(0),
});

export const updateAssetSchema = z.object({
  isPrimary: z.boolean().optional(),
  sortOrder: z.number().int().min(0).optional(),
});