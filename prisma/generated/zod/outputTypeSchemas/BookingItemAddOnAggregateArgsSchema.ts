import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemAddOnWhereInputSchema } from '../inputTypeSchemas/BookingItemAddOnWhereInputSchema'
import { BookingItemAddOnOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingItemAddOnOrderByWithRelationInputSchema'
import { BookingItemAddOnWhereUniqueInputSchema } from '../inputTypeSchemas/BookingItemAddOnWhereUniqueInputSchema'

export const BookingItemAddOnAggregateArgsSchema: z.ZodType<Prisma.BookingItemAddOnAggregateArgs> = z.object({
  where: BookingItemAddOnWhereInputSchema.optional(),
  orderBy: z.union([ BookingItemAddOnOrderByWithRelationInputSchema.array(),BookingItemAddOnOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingItemAddOnWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingItemAddOnAggregateArgsSchema;
