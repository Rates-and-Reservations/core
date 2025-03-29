import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionWhereInputSchema } from '../inputTypeSchemas/BookingActionWhereInputSchema'

export const BookingActionDeleteManyArgsSchema: z.ZodType<Prisma.BookingActionDeleteManyArgs> = z.object({
  where: BookingActionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingActionDeleteManyArgsSchema;
