import { z } from 'zod';
import { RateDurationType, TaxType } from '@prisma/client';

export const createRateSchema = z.object({
  resourceId: z.string().min(1, 'Resource ID is required'),
  name: z.string().min(1, 'Rate name is required').max(255),
  description: z.string().optional(),
  price: z.number().min(0, 'Price cannot be negative'),
  currency: z.string().length(3, 'Currency must be a 3-letter code').default('USD'),
  durationType: z.nativeEnum(RateDurationType),
  isDefault: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  orderIndex: z.number().int().min(0).default(0),
  validFrom: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  validTo: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  taxType: z.nativeEnum(TaxType).default(TaxType.PERCENTAGE),
  taxAmount: z.number().min(0).max(100).default(0),
}).refine(data => {
  if (data.validFrom && data.validTo) {
    return data.validTo > data.validFrom;
  }
  return true;
}, {
  message: 'Valid to date must be after valid from date',
  path: ['validTo'],
});

export const updateRateSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  price: z.number().min(0).optional(),
  currency: z.string().length(3).optional(),
  durationType: z.nativeEnum(RateDurationType).optional(),
  isDefault: z.boolean().optional(),
  isPublished: z.boolean().optional(),
  isActive: z.boolean().optional(),
  orderIndex: z.number().int().min(0).optional(),
  validFrom: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  validTo: z.string().datetime().optional().transform(val => val ? new Date(val) : undefined),
  taxType: z.nativeEnum(TaxType).optional(),
  taxAmount: z.number().min(0).max(100).optional(),
}).refine(data => {
  if (data.validFrom && data.validTo) {
    return data.validTo > data.validFrom;
  }
  return true;
}, {
  message: 'Valid to date must be after valid from date',
  path: ['validTo'],
});

export const rateQuerySchema = z.object({
  resourceId: z.string().optional(),
  isActive: z.string().optional().transform(val => val === 'true'),
});

export const createAddOnSchema = z.object({
  name: z.string().min(1, 'Add-on name is required').max(255),
  description: z.string().optional(),
  price: z.number().min(0, 'Price cannot be negative'),
  currency: z.string().length(3).default('USD'),
  showInBooking: z.boolean().default(true),
  hasInventory: z.boolean().default(false),
  inventoryCount: z.number().int().min(0).optional(),
  lowStockWarning: z.number().int().min(0).optional(),
}).refine(data => {
  if (data.hasInventory && data.inventoryCount === undefined) {
    return false;
  }
  return true;
}, {
  message: 'Inventory count is required when hasInventory is true',
  path: ['inventoryCount'],
});

export const updateAddOnSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().optional(),
  price: z.number().min(0).optional(),
  currency: z.string().length(3).optional(),
  showInBooking: z.boolean().optional(),
  isActive: z.boolean().optional(),
  hasInventory: z.boolean().optional(),
  inventoryCount: z.number().int().min(0).optional(),
  lowStockWarning: z.number().int().min(0).optional(),
});
