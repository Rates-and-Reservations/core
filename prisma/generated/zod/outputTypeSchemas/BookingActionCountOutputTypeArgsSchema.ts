import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionCountOutputTypeSelectSchema } from './BookingActionCountOutputTypeSelectSchema';

export const BookingActionCountOutputTypeArgsSchema: z.ZodType<Prisma.BookingActionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BookingActionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BookingActionCountOutputTypeSelectSchema;
