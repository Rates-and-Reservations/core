import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemWhereInputSchema } from '../inputTypeSchemas/BookingItemWhereInputSchema'
import { BookingItemOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingItemOrderByWithAggregationInputSchema'
import { BookingItemScalarFieldEnumSchema } from '../inputTypeSchemas/BookingItemScalarFieldEnumSchema'
import { BookingItemScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingItemScalarWhereWithAggregatesInputSchema'

export const BookingItemGroupByArgsSchema: z.ZodType<Prisma.BookingItemGroupByArgs> = z.object({
  where: BookingItemWhereInputSchema.optional(),
  orderBy: z.union([ BookingItemOrderByWithAggregationInputSchema.array(),BookingItemOrderByWithAggregationInputSchema ]).optional(),
  by: BookingItemScalarFieldEnumSchema.array(),
  having: BookingItemScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingItemGroupByArgsSchema;
