import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueWhereInputSchema } from '../inputTypeSchemas/BookingRequestActionValueWhereInputSchema'
import { BookingRequestActionValueOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingRequestActionValueOrderByWithRelationInputSchema'
import { BookingRequestActionValueWhereUniqueInputSchema } from '../inputTypeSchemas/BookingRequestActionValueWhereUniqueInputSchema'

export const BookingRequestActionValueAggregateArgsSchema: z.ZodType<Prisma.BookingRequestActionValueAggregateArgs> = z.object({
  where: BookingRequestActionValueWhereInputSchema.optional(),
  orderBy: z.union([ BookingRequestActionValueOrderByWithRelationInputSchema.array(),BookingRequestActionValueOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingRequestActionValueWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingRequestActionValueAggregateArgsSchema;
