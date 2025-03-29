import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemCountOutputTypeSelectSchema } from './BookingItemCountOutputTypeSelectSchema';

export const BookingItemCountOutputTypeArgsSchema: z.ZodType<Prisma.BookingItemCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BookingItemCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BookingItemCountOutputTypeSelectSchema;
