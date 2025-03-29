import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemArgsSchema } from "../outputTypeSchemas/BookingItemArgsSchema"
import { AddOnArgsSchema } from "../outputTypeSchemas/AddOnArgsSchema"

export const BookingItemAddOnIncludeSchema: z.ZodType<Prisma.BookingItemAddOnInclude> = z.object({
  bookingItem: z.union([z.boolean(),z.lazy(() => BookingItemArgsSchema)]).optional(),
  addOn: z.union([z.boolean(),z.lazy(() => AddOnArgsSchema)]).optional(),
}).strict()

export default BookingItemAddOnIncludeSchema;
