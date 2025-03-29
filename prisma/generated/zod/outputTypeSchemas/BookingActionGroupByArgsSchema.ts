import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionWhereInputSchema } from '../inputTypeSchemas/BookingActionWhereInputSchema'
import { BookingActionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingActionOrderByWithAggregationInputSchema'
import { BookingActionScalarFieldEnumSchema } from '../inputTypeSchemas/BookingActionScalarFieldEnumSchema'
import { BookingActionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingActionScalarWhereWithAggregatesInputSchema'

export const BookingActionGroupByArgsSchema: z.ZodType<Prisma.BookingActionGroupByArgs> = z.object({
  where: BookingActionWhereInputSchema.optional(),
  orderBy: z.union([ BookingActionOrderByWithAggregationInputSchema.array(),BookingActionOrderByWithAggregationInputSchema ]).optional(),
  by: BookingActionScalarFieldEnumSchema.array(),
  having: BookingActionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingActionGroupByArgsSchema;
