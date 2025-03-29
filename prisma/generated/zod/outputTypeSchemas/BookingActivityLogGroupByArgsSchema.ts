import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogWhereInputSchema } from '../inputTypeSchemas/BookingActivityLogWhereInputSchema'
import { BookingActivityLogOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingActivityLogOrderByWithAggregationInputSchema'
import { BookingActivityLogScalarFieldEnumSchema } from '../inputTypeSchemas/BookingActivityLogScalarFieldEnumSchema'
import { BookingActivityLogScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingActivityLogScalarWhereWithAggregatesInputSchema'

export const BookingActivityLogGroupByArgsSchema: z.ZodType<Prisma.BookingActivityLogGroupByArgs> = z.object({
  where: BookingActivityLogWhereInputSchema.optional(),
  orderBy: z.union([ BookingActivityLogOrderByWithAggregationInputSchema.array(),BookingActivityLogOrderByWithAggregationInputSchema ]).optional(),
  by: BookingActivityLogScalarFieldEnumSchema.array(),
  having: BookingActivityLogScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingActivityLogGroupByArgsSchema;
