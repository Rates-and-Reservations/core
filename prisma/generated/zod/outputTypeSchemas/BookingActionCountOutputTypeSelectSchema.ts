import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BookingActionCountOutputTypeSelectSchema: z.ZodType<Prisma.BookingActionCountOutputTypeSelect> = z.object({
  BookingRequestActionValue: z.boolean().optional(),
}).strict();

export default BookingActionCountOutputTypeSelectSchema;
