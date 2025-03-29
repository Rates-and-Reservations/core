import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const MerchantContactCreateWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantContactCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  postcode: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MerchantContactCreateWithoutMerchantInputSchema;
