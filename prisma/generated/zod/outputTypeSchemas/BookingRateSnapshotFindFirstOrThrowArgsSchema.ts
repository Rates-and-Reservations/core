import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotIncludeSchema } from '../inputTypeSchemas/BookingRateSnapshotIncludeSchema'
import { BookingRateSnapshotWhereInputSchema } from '../inputTypeSchemas/BookingRateSnapshotWhereInputSchema'
import { BookingRateSnapshotOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingRateSnapshotOrderByWithRelationInputSchema'
import { BookingRateSnapshotWhereUniqueInputSchema } from '../inputTypeSchemas/BookingRateSnapshotWhereUniqueInputSchema'
import { BookingRateSnapshotScalarFieldEnumSchema } from '../inputTypeSchemas/BookingRateSnapshotScalarFieldEnumSchema'
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

export const BookingRateSnapshotFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BookingRateSnapshotFindFirstOrThrowArgs> = z.object({
  select: BookingRateSnapshotSelectSchema.optional(),
  include: z.lazy(() => BookingRateSnapshotIncludeSchema).optional(),
  where: BookingRateSnapshotWhereInputSchema.optional(),
  orderBy: z.union([ BookingRateSnapshotOrderByWithRelationInputSchema.array(),BookingRateSnapshotOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingRateSnapshotWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingRateSnapshotScalarFieldEnumSchema,BookingRateSnapshotScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BookingRateSnapshotFindFirstOrThrowArgsSchema;
