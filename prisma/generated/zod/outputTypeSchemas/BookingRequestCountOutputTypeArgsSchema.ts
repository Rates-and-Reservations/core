import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestCountOutputTypeSelectSchema } from './BookingRequestCountOutputTypeSelectSchema';

export const BookingRequestCountOutputTypeArgsSchema: z.ZodType<Prisma.BookingRequestCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BookingRequestCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BookingRequestCountOutputTypeSelectSchema;
