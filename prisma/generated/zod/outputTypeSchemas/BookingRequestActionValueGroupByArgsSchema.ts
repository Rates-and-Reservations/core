import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueWhereInputSchema } from '../inputTypeSchemas/BookingRequestActionValueWhereInputSchema'
import { BookingRequestActionValueOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingRequestActionValueOrderByWithAggregationInputSchema'
import { BookingRequestActionValueScalarFieldEnumSchema } from '../inputTypeSchemas/BookingRequestActionValueScalarFieldEnumSchema'
import { BookingRequestActionValueScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingRequestActionValueScalarWhereWithAggregatesInputSchema'

export const BookingRequestActionValueGroupByArgsSchema: z.ZodType<Prisma.BookingRequestActionValueGroupByArgs> = z.object({
  where: BookingRequestActionValueWhereInputSchema.optional(),
  orderBy: z.union([ BookingRequestActionValueOrderByWithAggregationInputSchema.array(),BookingRequestActionValueOrderByWithAggregationInputSchema ]).optional(),
  by: BookingRequestActionValueScalarFieldEnumSchema.array(),
  having: BookingRequestActionValueScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingRequestActionValueGroupByArgsSchema;
