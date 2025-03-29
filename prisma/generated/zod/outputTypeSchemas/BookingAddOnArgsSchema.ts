import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnSelectSchema } from '../inputTypeSchemas/BookingAddOnSelectSchema';
import { BookingAddOnIncludeSchema } from '../inputTypeSchemas/BookingAddOnIncludeSchema';

export const BookingAddOnArgsSchema: z.ZodType<Prisma.BookingAddOnDefaultArgs> = z.object({
  select: z.lazy(() => BookingAddOnSelectSchema).optional(),
  include: z.lazy(() => BookingAddOnIncludeSchema).optional(),
}).strict();

export default BookingAddOnArgsSchema;
