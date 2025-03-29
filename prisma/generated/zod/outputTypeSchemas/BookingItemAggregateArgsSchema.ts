import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemWhereInputSchema } from '../inputTypeSchemas/BookingItemWhereInputSchema'
import { BookingItemOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingItemOrderByWithRelationInputSchema'
import { BookingItemWhereUniqueInputSchema } from '../inputTypeSchemas/BookingItemWhereUniqueInputSchema'

export const BookingItemAggregateArgsSchema: z.ZodType<Prisma.BookingItemAggregateArgs> = z.object({
  where: BookingItemWhereInputSchema.optional(),
  orderBy: z.union([ BookingItemOrderByWithRelationInputSchema.array(),BookingItemOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingItemWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingItemAggregateArgsSchema;
