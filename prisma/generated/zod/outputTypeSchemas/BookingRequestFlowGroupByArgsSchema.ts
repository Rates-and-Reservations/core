import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestFlowWhereInputSchema } from '../inputTypeSchemas/BookingRequestFlowWhereInputSchema'
import { BookingRequestFlowOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BookingRequestFlowOrderByWithAggregationInputSchema'
import { BookingRequestFlowScalarFieldEnumSchema } from '../inputTypeSchemas/BookingRequestFlowScalarFieldEnumSchema'
import { BookingRequestFlowScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BookingRequestFlowScalarWhereWithAggregatesInputSchema'

export const BookingRequestFlowGroupByArgsSchema: z.ZodType<Prisma.BookingRequestFlowGroupByArgs> = z.object({
  where: BookingRequestFlowWhereInputSchema.optional(),
  orderBy: z.union([ BookingRequestFlowOrderByWithAggregationInputSchema.array(),BookingRequestFlowOrderByWithAggregationInputSchema ]).optional(),
  by: BookingRequestFlowScalarFieldEnumSchema.array(),
  having: BookingRequestFlowScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingRequestFlowGroupByArgsSchema;
