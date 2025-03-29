import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemSelectSchema } from '../inputTypeSchemas/BookingItemSelectSchema';
import { BookingItemIncludeSchema } from '../inputTypeSchemas/BookingItemIncludeSchema';

export const BookingItemArgsSchema: z.ZodType<Prisma.BookingItemDefaultArgs> = z.object({
  select: z.lazy(() => BookingItemSelectSchema).optional(),
  include: z.lazy(() => BookingItemIncludeSchema).optional(),
}).strict();

export default BookingItemArgsSchema;
