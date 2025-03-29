import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemAddOnSelectSchema } from '../inputTypeSchemas/BookingItemAddOnSelectSchema';
import { BookingItemAddOnIncludeSchema } from '../inputTypeSchemas/BookingItemAddOnIncludeSchema';

export const BookingItemAddOnArgsSchema: z.ZodType<Prisma.BookingItemAddOnDefaultArgs> = z.object({
  select: z.lazy(() => BookingItemAddOnSelectSchema).optional(),
  include: z.lazy(() => BookingItemAddOnIncludeSchema).optional(),
}).strict();

export default BookingItemAddOnArgsSchema;
