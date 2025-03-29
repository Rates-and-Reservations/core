import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionWhereInputSchema } from '../inputTypeSchemas/BookingActionWhereInputSchema'
import { BookingActionOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingActionOrderByWithRelationInputSchema'
import { BookingActionWhereUniqueInputSchema } from '../inputTypeSchemas/BookingActionWhereUniqueInputSchema'

export const BookingActionAggregateArgsSchema: z.ZodType<Prisma.BookingActionAggregateArgs> = z.object({
  where: BookingActionWhereInputSchema.optional(),
  orderBy: z.union([ BookingActionOrderByWithRelationInputSchema.array(),BookingActionOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingActionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingActionAggregateArgsSchema;
