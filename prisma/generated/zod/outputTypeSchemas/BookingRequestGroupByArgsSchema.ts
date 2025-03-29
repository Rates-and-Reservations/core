import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestWhereInputSchema } from '../inputTypeSchemas/BookingRequestWhereInputSchema'
import { BookingRequestOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingRequestOrderByWithAggregationInputSchema'
import { BookingRequestScalarFieldEnumSchema } from '../inputTypeSchemas/BookingRequestScalarFieldEnumSchema'
import { BookingRequestScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingRequestScalarWhereWithAggregatesInputSchema'

export const BookingRequestGroupByArgsSchema: z.ZodType<Prisma.BookingRequestGroupByArgs> = z.object({
  where: BookingRequestWhereInputSchema.optional(),
  orderBy: z.union([ BookingRequestOrderByWithAggregationInputSchema.array(),BookingRequestOrderByWithAggregationInputSchema ]).optional(),
  by: BookingRequestScalarFieldEnumSchema.array(),
  having: BookingRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingRequestGroupByArgsSchema;
