import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotIncludeSchema } from '../inputTypeSchemas/BookingRateSnapshotIncludeSchema'
import { BookingRateSnapshotCreateInputSchema } from '../inputTypeSchemas/BookingRateSnapshotCreateInputSchema'
import { BookingRateSnapshotUncheckedCreateInputSchema } from '../inputTypeSchemas/BookingRateSnapshotUncheckedCreateInputSchema'
import { RateArgsSchema } from "../outputTypeSchemas/RateArgsSchema"
import { BookingItemFindManyArgsSchema } from "../outputTypeSchemas/BookingItemFindManyArgsSchema"
import { BookingRateSnapshotCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingRateSnapshotCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingRateSnapshotSelectSchema: z.ZodType<Prisma.BookingRateSnapshotSelect> = z.object({
  id: z.boolean().optional(),
  rateId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  price: z.boolean().optional(),
  currency: z.boolean().optional(),
  durationType: z.boolean().optional(),
  isDefault: z.boolean().optional(),
  isActive: z.boolean().optional(),
  bookingStartDate: z.boolean().optional(),
  bookingEndDate: z.boolean().optional(),
  usageStartDate: z.boolean().optional(),
  usageEndDate: z.boolean().optional(),
  taxType: z.boolean().optional(),
  taxAmount: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  rate: z.union([z.boolean(),z.lazy(() => RateArgsSchema)]).optional(),
  BookingItem: z.union([z.boolean(),z.lazy(() => BookingItemFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingRateSnapshotCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BookingRateSnapshotCreateArgsSchema: z.ZodType<Prisma.BookingRateSnapshotCreateArgs> = z.object({
  select: BookingRateSnapshotSelectSchema.optional(),
  include: z.lazy(() => BookingRateSnapshotIncludeSchema).optional(),
  data: z.union([ BookingRateSnapshotCreateInputSchema,BookingRateSnapshotUncheckedCreateInputSchema ]),
}).strict() ;

export default BookingRateSnapshotCreateArgsSchema;
