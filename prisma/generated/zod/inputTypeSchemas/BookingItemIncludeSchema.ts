import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { BookingRateSnapshotArgsSchema } from "../outputTypeSchemas/BookingRateSnapshotArgsSchema"
import { BookingItemAddOnFindManyArgsSchema } from "../outputTypeSchemas/BookingItemAddOnFindManyArgsSchema"
import { CancellationRequestFindManyArgsSchema } from "../outputTypeSchemas/CancellationRequestFindManyArgsSchema"
import { BookingItemCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingItemCountOutputTypeArgsSchema"

export const BookingItemIncludeSchema: z.ZodType<Prisma.BookingItemInclude> = z.object({
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  bookingRateSnapshot: z.union([z.boolean(),z.lazy(() => BookingRateSnapshotArgsSchema)]).optional(),
  BookingItemAddOn: z.union([z.boolean(),z.lazy(() => BookingItemAddOnFindManyArgsSchema)]).optional(),
  CancellationRequest: z.union([z.boolean(),z.lazy(() => CancellationRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingItemCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BookingItemIncludeSchema;
