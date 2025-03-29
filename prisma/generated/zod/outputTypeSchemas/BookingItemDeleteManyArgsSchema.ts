import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemWhereInputSchema } from '../inputTypeSchemas/BookingItemWhereInputSchema'

export const BookingItemDeleteManyArgsSchema: z.ZodType<Prisma.BookingItemDeleteManyArgs> = z.object({
  where: BookingItemWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingItemDeleteManyArgsSchema;
