import { z } from 'zod';
import { BusinessType, OrganisationRoles } from '@prisma/client';

export const createMerchantSchema = z.object({
  name: z.string().min(1, 'Merchant name is required').max(255),
  tradingName: z.string().min(1, 'Trading name is required').max(255),
  country: z.string().min(2, 'Country is required').max(2), // ISO country code
  businessType: z.nativeEnum(BusinessType),
  industry: z.string().min(1, 'Industry is required').max(100),
  category: z.string().min(1, 'Category is required').max(100),
  vatNumber: z.string().optional(),
  description: z.string().optional(),
  timezone: z.string().default('UTC'),
  locale: z.string().default('en-US'),
  currency: z.string().length(3).default('USD'), // ISO currency code
  dateFormat: z.string().default('DD/MM/YYYY'),
  timeFormat: z.enum(['12h', '24h']).default('24h'),
});

export const updateMerchantSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  tradingName: z.string().min(1).max(255).optional(),
  country: z.string().length(2).optional(),
  businessType: z.nativeEnum(BusinessType).optional(),
  industry: z.string().min(1).max(100).optional(),
  category: z.string().min(1).max(100).optional(),
  vatNumber: z.string().optional(),
  description: z.string().optional(),
  logo: z.string().url().optional(),
  timezone: z.string().optional(),
  locale: z.string().optional(),
  currency: z.string().length(3).optional(),
  dateFormat: z.string().optional(),
  timeFormat: z.enum(['12h', '24h']).optional(),
});

export const createMerchantContactSchema = z.object({
  email: z.string().email('Invalid email format'),
  phone: z.string().min(1, 'Phone is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  postcode: z.string().min(1, 'Postcode is required'),
  isDefault: z.boolean().default(false),
});

export const updateMerchantContactSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().min(1).optional(),
  address: z.string().min(1).optional(),
  city: z.string().min(1).optional(),
  postcode: z.string().min(1).optional(),
  isDefault: z.boolean().optional(),
});

export const inviteMerchantUserSchema = z.object({
  userId: z.string().min(1, 'User ID is required'), // Clerk user ID
  role: z.nativeEnum(OrganisationRoles),
});

export const updateMerchantUserSchema = z.object({
  role: z.nativeEnum(OrganisationRoles).optional(),
  isActive: z.boolean().optional(),
});
