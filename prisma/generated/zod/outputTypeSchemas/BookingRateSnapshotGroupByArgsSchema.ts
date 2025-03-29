import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotWhereInputSchema } from '../inputTypeSchemas/BookingRateSnapshotWhereInputSchema'
import { BookingRateSnapshotOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingRateSnapshotOrderByWithAggregationInputSchema'
import { BookingRateSnapshotScalarFieldEnumSchema } from '../inputTypeSchemas/BookingRateSnapshotScalarFieldEnumSchema'
import { BookingRateSnapshotScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingRateSnapshotScalarWhereWithAggregatesInputSchema'

export const BookingRateSnapshotGroupByArgsSchema: z.ZodType<Prisma.BookingRateSnapshotGroupByArgs> = z.object({
  where: BookingRateSnapshotWhereInputSchema.optional(),
  orderBy: z.union([ BookingRateSnapshotOrderByWithAggregationInputSchema.array(),BookingRateSnapshotOrderByWithAggregationInputSchema ]).optional(),
  by: BookingRateSnapshotScalarFieldEnumSchema.array(),
  having: BookingRateSnapshotScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingRateSnapshotGroupByArgsSchema;
