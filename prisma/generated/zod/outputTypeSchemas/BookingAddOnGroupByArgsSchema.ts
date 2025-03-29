import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnWhereInputSchema } from '../inputTypeSchemas/BookingAddOnWhereInputSchema'
import { BookingAddOnOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingAddOnOrderByWithAggregationInputSchema'
import { BookingAddOnScalarFieldEnumSchema } from '../inputTypeSchemas/BookingAddOnScalarFieldEnumSchema'
import { BookingAddOnScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingAddOnScalarWhereWithAggregatesInputSchema'

export const BookingAddOnGroupByArgsSchema: z.ZodType<Prisma.BookingAddOnGroupByArgs> = z.object({
  where: BookingAddOnWhereInputSchema.optional(),
  orderBy: z.union([ BookingAddOnOrderByWithAggregationInputSchema.array(),BookingAddOnOrderByWithAggregationInputSchema ]).optional(),
  by: BookingAddOnScalarFieldEnumSchema.array(),
  having: BookingAddOnScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingAddOnGroupByArgsSchema;
