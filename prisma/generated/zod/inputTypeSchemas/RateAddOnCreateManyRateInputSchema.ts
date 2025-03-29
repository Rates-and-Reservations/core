import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RateAddOnCreateManyRateInputSchema: z.ZodType<Prisma.RateAddOnCreateManyRateInput> = z.object({
  id: z.string().cuid().optional(),
  addOnId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RateAddOnCreateManyRateInputSchema;
