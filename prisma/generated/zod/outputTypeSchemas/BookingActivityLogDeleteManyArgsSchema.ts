import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogWhereInputSchema } from '../inputTypeSchemas/BookingActivityLogWhereInputSchema'

export const BookingActivityLogDeleteManyArgsSchema: z.ZodType<Prisma.BookingActivityLogDeleteManyArgs> = z.object({
  where: BookingActivityLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingActivityLogDeleteManyArgsSchema;
