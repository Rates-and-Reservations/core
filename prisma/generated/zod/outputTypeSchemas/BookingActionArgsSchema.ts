import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionSelectSchema } from '../inputTypeSchemas/BookingActionSelectSchema';
import { BookingActionIncludeSchema } from '../inputTypeSchemas/BookingActionIncludeSchema';

export const BookingActionArgsSchema: z.ZodType<Prisma.BookingActionDefaultArgs> = z.object({
  select: z.lazy(() => BookingActionSelectSchema).optional(),
  include: z.lazy(() => BookingActionIncludeSchema).optional(),
}).strict();

export default BookingActionArgsSchema;
