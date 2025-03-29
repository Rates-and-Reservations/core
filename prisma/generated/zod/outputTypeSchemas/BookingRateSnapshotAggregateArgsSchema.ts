import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotWhereInputSchema } from '../inputTypeSchemas/BookingRateSnapshotWhereInputSchema'
import { BookingRateSnapshotOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingRateSnapshotOrderByWithRelationInputSchema'
import { BookingRateSnapshotWhereUniqueInputSchema } from '../inputTypeSchemas/BookingRateSnapshotWhereUniqueInputSchema'

export const BookingRateSnapshotAggregateArgsSchema: z.ZodType<Prisma.BookingRateSnapshotAggregateArgs> = z.object({
  where: BookingRateSnapshotWhereInputSchema.optional(),
  orderBy: z.union([ BookingRateSnapshotOrderByWithRelationInputSchema.array(),BookingRateSnapshotOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingRateSnapshotWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingRateSnapshotAggregateArgsSchema;
