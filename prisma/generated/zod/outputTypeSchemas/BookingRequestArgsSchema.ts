import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestSelectSchema } from '../inputTypeSchemas/BookingRequestSelectSchema';
import { BookingRequestIncludeSchema } from '../inputTypeSchemas/BookingRequestIncludeSchema';

export const BookingRequestArgsSchema: z.ZodType<Prisma.BookingRequestDefaultArgs> = z.object({
  select: z.lazy(() => BookingRequestSelectSchema).optional(),
  include: z.lazy(() => BookingRequestIncludeSchema).optional(),
}).strict();

export default BookingRequestArgsSchema;
