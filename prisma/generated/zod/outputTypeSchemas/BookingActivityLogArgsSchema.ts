import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogSelectSchema } from '../inputTypeSchemas/BookingActivityLogSelectSchema';
import { BookingActivityLogIncludeSchema } from '../inputTypeSchemas/BookingActivityLogIncludeSchema';

export const BookingActivityLogArgsSchema: z.ZodType<Prisma.BookingActivityLogDefaultArgs> = z.object({
  select: z.lazy(() => BookingActivityLogSelectSchema).optional(),
  include: z.lazy(() => BookingActivityLogIncludeSchema).optional(),
}).strict();

export default BookingActivityLogArgsSchema;
