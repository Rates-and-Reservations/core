import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const AddOnCountOutputTypeSelectSchema: z.ZodType<Prisma.AddOnCountOutputTypeSelect> = z.object({
  RateAddOn: z.boolean().optional(),
  BookingItemAddOn: z.boolean().optional(),
  BookingAddOn: z.boolean().optional(),
}).strict();

export default AddOnCountOutputTypeSelectSchema;
