import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionArgsSchema } from "../outputTypeSchemas/BookingActionArgsSchema"
import { BookingRequestArgsSchema } from "../outputTypeSchemas/BookingRequestArgsSchema"

export const BookingRequestActionValueIncludeSchema: z.ZodType<Prisma.BookingRequestActionValueInclude> = z.object({
  bookingAction: z.union([z.boolean(),z.lazy(() => BookingActionArgsSchema)]).optional(),
  bookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestArgsSchema)]).optional(),
}).strict()

export default BookingRequestActionValueIncludeSchema;
