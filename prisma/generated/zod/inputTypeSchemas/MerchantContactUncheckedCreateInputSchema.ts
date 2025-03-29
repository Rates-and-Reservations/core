import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const MerchantContactUncheckedCreateInputSchema: z.ZodType<Prisma.MerchantContactUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  postcode: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MerchantContactUncheckedCreateInputSchema;
