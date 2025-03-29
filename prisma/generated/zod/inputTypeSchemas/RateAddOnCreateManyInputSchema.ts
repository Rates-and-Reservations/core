import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RateAddOnCreateManyInputSchema: z.ZodType<Prisma.RateAddOnCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  rateId: z.string(),
  addOnId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RateAddOnCreateManyInputSchema;
