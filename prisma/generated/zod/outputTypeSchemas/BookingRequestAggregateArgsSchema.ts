import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestWhereInputSchema } from '../inputTypeSchemas/BookingRequestWhereInputSchema'
import { BookingRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingRequestOrderByWithRelationInputSchema'
import { BookingRequestWhereUniqueInputSchema } from '../inputTypeSchemas/BookingRequestWhereUniqueInputSchema'

export const BookingRequestAggregateArgsSchema: z.ZodType<Prisma.BookingRequestAggregateArgs> = z.object({
  where: BookingRequestWhereInputSchema.optional(),
  orderBy: z.union([ BookingRequestOrderByWithRelationInputSchema.array(),BookingRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BookingRequestAggregateArgsSchema;
