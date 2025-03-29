import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnWhereInputSchema } from '../inputTypeSchemas/BookingAddOnWhereInputSchema'
import { BookingAddOnOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingAddOnOrderByWithRelationInputSchema'
import { BookingAddOnWhereUniqueInputSchema } from '../inputTypeSchemas/BookingAddOnWhereUniqueInputSchema'

export const BookingAddOnAggregateArgsSchema: z.ZodType<Prisma.BookingAddOnAggregateArgs> = z.object({
  where: BookingAddOnWhereInputSchema.optional(),
  orderBy: z.union([ BookingAddOnOrderByWithRelationInputSchema.array(),BookingAddOnOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingAddOnWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingAddOnAggregateArgsSchema;
