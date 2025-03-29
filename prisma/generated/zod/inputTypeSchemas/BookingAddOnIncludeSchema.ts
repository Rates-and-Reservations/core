import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { AddOnArgsSchema } from "../outputTypeSchemas/AddOnArgsSchema"

export const BookingAddOnIncludeSchema: z.ZodType<Prisma.BookingAddOnInclude> = z.object({
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  addOn: z.union([z.boolean(),z.lazy(() => AddOnArgsSchema)]).optional(),
}).strict()

export default BookingAddOnIncludeSchema;
