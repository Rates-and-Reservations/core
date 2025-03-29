import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemIncludeSchema } from '../inputTypeSchemas/BookingItemIncludeSchema'
import { BookingItemUpdateInputSchema } from '../inputTypeSchemas/BookingItemUpdateInputSchema'
import { BookingItemUncheckedUpdateInputSchema } from '../inputTypeSchemas/BookingItemUncheckedUpdateInputSchema'
import { BookingItemWhereUniqueInputSchema } from '../inputTypeSchemas/BookingItemWhereUniqueInputSchema'
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { BookingRateSnapshotArgsSchema } from "../outputTypeSchemas/BookingRateSnapshotArgsSchema"
import { BookingItemAddOnFindManyArgsSchema } from "../outputTypeSchemas/BookingItemAddOnFindManyArgsSchema"
import { CancellationRequestFindManyArgsSchema } from "../outputTypeSchemas/CancellationRequestFindManyArgsSchema"
import { BookingItemCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingItemCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingItemSelectSchema: z.ZodType<Prisma.BookingItemSelect> = z.object({
  id: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  bookingRateSnapshotId: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  bookingRateSnapshot: z.union([z.boolean(),z.lazy(() => BookingRateSnapshotArgsSchema)]).optional(),
  BookingItemAddOn: z.union([z.boolean(),z.lazy(() => BookingItemAddOnFindManyArgsSchema)]).optional(),
  CancellationRequest: z.union([z.boolean(),z.lazy(() => CancellationRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingItemCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BookingItemUpdateArgsSchema: z.ZodType<Prisma.BookingItemUpdateArgs> = z.object({
  select: BookingItemSelectSchema.optional(),
  include: z.lazy(() => BookingItemIncludeSchema).optional(),
  data: z.union([ BookingItemUpdateInputSchema,BookingItemUncheckedUpdateInputSchema ]),
  where: BookingItemWhereUniqueInputSchema,
}).strict() ;

export default BookingItemUpdateArgsSchema;
