import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BusinessTypeSchema } from './BusinessTypeSchema';

export const MerchantCreateManyInputSchema: z.ZodType<Prisma.MerchantCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  ownerId: z.string(),
  country: z.string(),
  businessType: z.lazy(() => BusinessTypeSchema),
  tradingName: z.string(),
  vatNumber: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  industry: z.string(),
  category: z.string(),
  isVerified: z.boolean().optional(),
  isActive: z.boolean().optional(),
  verifiedAt: z.coerce.date().optional().nullable(),
  disabledAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MerchantCreateManyInputSchema;
