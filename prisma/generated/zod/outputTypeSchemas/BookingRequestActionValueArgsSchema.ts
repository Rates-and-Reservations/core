import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueSelectSchema } from '../inputTypeSchemas/BookingRequestActionValueSelectSchema';
import { BookingRequestActionValueIncludeSchema } from '../inputTypeSchemas/BookingRequestActionValueIncludeSchema';

export const BookingRequestActionValueArgsSchema: z.ZodType<Prisma.BookingRequestActionValueDefaultArgs> = z.object({
  select: z.lazy(() => BookingRequestActionValueSelectSchema).optional(),
  include: z.lazy(() => BookingRequestActionValueIncludeSchema).optional(),
}).strict();

export default BookingRequestActionValueArgsSchema;
