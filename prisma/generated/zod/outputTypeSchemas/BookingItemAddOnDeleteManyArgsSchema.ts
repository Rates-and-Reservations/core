import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemAddOnWhereInputSchema } from '../inputTypeSchemas/BookingItemAddOnWhereInputSchema'

export const BookingItemAddOnDeleteManyArgsSchema: z.ZodType<Prisma.BookingItemAddOnDeleteManyArgs> = z.object({
  where: BookingItemAddOnWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingItemAddOnDeleteManyArgsSchema;
