import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RateAddOnCreateManyAddOnInputSchema: z.ZodType<Prisma.RateAddOnCreateManyAddOnInput> = z.object({
  id: z.string().cuid().optional(),
  rateId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default RateAddOnCreateManyAddOnInputSchema;
