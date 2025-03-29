import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueIncludeSchema } from '../inputTypeSchemas/BookingRequestActionValueIncludeSchema'
import { BookingRequestActionValueWhereUniqueInputSchema } from '../inputTypeSchemas/BookingRequestActionValueWhereUniqueInputSchema'
import { BookingActionArgsSchema } from "../outputTypeSchemas/BookingActionArgsSchema"
import { BookingRequestArgsSchema } from "../outputTypeSchemas/BookingRequestArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingRequestActionValueSelectSchema: z.ZodType<Prisma.BookingRequestActionValueSelect> = z.object({
  id: z.boolean().optional(),
  bookingRequestId: z.boolean().optional(),
  bookingActionId: z.boolean().optional(),
  value: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  bookingAction: z.union([z.boolean(),z.lazy(() => BookingActionArgsSchema)]).optional(),
  bookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestArgsSchema)]).optional(),
}).strict()

export const BookingRequestActionValueFindUniqueArgsSchema: z.ZodType<Prisma.BookingRequestActionValueFindUniqueArgs> = z.object({
  select: BookingRequestActionValueSelectSchema.optional(),
  include: z.lazy(() => BookingRequestActionValueIncludeSchema).optional(),
  where: BookingRequestActionValueWhereUniqueInputSchema,
}).strict() ;

export default BookingRequestActionValueFindUniqueArgsSchema;
