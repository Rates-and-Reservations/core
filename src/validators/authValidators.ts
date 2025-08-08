import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token is required'),
});

export const createApiKeySchema = z.object({
  label: z.string().min(1, 'Label is required').max(100, 'Label too long'),
  description: z.string().optional(),
  scopes: z.array(z.string()).optional().default([]),
});

export const updateApiKeySchema = z.object({
  label: z.string().min(1, 'Label is required').max(100, 'Label too long').optional(),
  description: z.string().optional(),
  scopes: z.array(z.string()).optional(),
  isActive: z.boolean().optional(),
});
