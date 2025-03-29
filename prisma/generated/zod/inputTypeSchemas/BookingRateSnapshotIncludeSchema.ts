import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateArgsSchema } from "../outputTypeSchemas/RateArgsSchema"
import { BookingItemFindManyArgsSchema } from "../outputTypeSchemas/BookingItemFindManyArgsSchema"
import { BookingRateSnapshotCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingRateSnapshotCountOutputTypeArgsSchema"

export const BookingRateSnapshotIncludeSchema: z.ZodType<Prisma.BookingRateSnapshotInclude> = z.object({
  rate: z.union([z.boolean(),z.lazy(() => RateArgsSchema)]).optional(),
  BookingItem: z.union([z.boolean(),z.lazy(() => BookingItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingRateSnapshotCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default BookingRateSnapshotIncludeSchema;
