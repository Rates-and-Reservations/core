import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestFlowWhereInputSchema } from '../inputTypeSchemas/BookingRequestFlowWhereInputSchema'
import { BookingRequestFlowOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingRequestFlowOrderByWithRelationInputSchema'
import { BookingRequestFlowWhereUniqueInputSchema } from '../inputTypeSchemas/BookingRequestFlowWhereUniqueInputSchema'

export const BookingRequestFlowAggregateArgsSchema: z.ZodType<Prisma.BookingRequestFlowAggregateArgs> = z.object({
  where: BookingRequestFlowWhereInputSchema.optional(),
  orderBy: z.union([ BookingRequestFlowOrderByWithRelationInputSchema.array(),BookingRequestFlowOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingRequestFlowWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingRequestFlowAggregateArgsSchema;
