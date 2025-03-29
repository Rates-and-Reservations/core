import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogWhereInputSchema } from '../inputTypeSchemas/BookingActivityLogWhereInputSchema'
import { BookingActivityLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingActivityLogOrderByWithRelationInputSchema'
import { BookingActivityLogWhereUniqueInputSchema } from '../inputTypeSchemas/BookingActivityLogWhereUniqueInputSchema'

export const BookingActivityLogAggregateArgsSchema: z.ZodType<Prisma.BookingActivityLogAggregateArgs> = z.object({
  where: BookingActivityLogWhereInputSchema.optional(),
  orderBy: z.union([ BookingActivityLogOrderByWithRelationInputSchema.array(),BookingActivityLogOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingActivityLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingActivityLogAggregateArgsSchema;
