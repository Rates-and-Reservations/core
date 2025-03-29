import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const RateCountOutputTypeSelectSchema: z.ZodType<Prisma.RateCountOutputTypeSelect> = z.object({
  Discount: z.boolean().optional(),
  RateAddOn: z.boolean().optional(),
  BookingRateSnapshot: z.boolean().optional(),
}).strict();

export default RateCountOutputTypeSelectSchema;
