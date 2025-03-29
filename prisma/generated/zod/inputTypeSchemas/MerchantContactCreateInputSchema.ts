import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateNestedOneWithoutMerchantContactInputSchema } from './MerchantCreateNestedOneWithoutMerchantContactInputSchema';

export const MerchantContactCreateInputSchema: z.ZodType<Prisma.MerchantContactCreateInput> = z.object({
  id: z.string().cuid().optional(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
  city: z.string(),
  postcode: z.string(),
  isDefault: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutMerchantContactInputSchema)
}).strict();

export default MerchantContactCreateInputSchema;
