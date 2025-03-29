import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookingItemCountOutputTypeSelectSchema: z.ZodType<Prisma.BookingItemCountOutputTypeSelect> = z.object({
  BookingItemAddOn: z.boolean().optional(),
  CancellationRequest: z.boolean().optional(),
}).strict();

export default BookingItemCountOutputTypeSelectSchema;
