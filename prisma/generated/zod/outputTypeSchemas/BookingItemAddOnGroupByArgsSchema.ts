import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemAddOnWhereInputSchema } from '../inputTypeSchemas/BookingItemAddOnWhereInputSchema'
import { BookingItemAddOnOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingItemAddOnOrderByWithAggregationInputSchema'
import { BookingItemAddOnScalarFieldEnumSchema } from '../inputTypeSchemas/BookingItemAddOnScalarFieldEnumSchema'
import { BookingItemAddOnScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingItemAddOnScalarWhereWithAggregatesInputSchema'

export const BookingItemAddOnGroupByArgsSchema: z.ZodType<Prisma.BookingItemAddOnGroupByArgs> = z.object({
  where: BookingItemAddOnWhereInputSchema.optional(),
  orderBy: z.union([ BookingItemAddOnOrderByWithAggregationInputSchema.array(),BookingItemAddOnOrderByWithAggregationInputSchema ]).optional(),
  by: BookingItemAddOnScalarFieldEnumSchema.array(),
  having: BookingItemAddOnScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingItemAddOnGroupByArgsSchema;
