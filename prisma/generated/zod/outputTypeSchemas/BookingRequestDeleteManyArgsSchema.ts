import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestWhereInputSchema } from '../inputTypeSchemas/BookingRequestWhereInputSchema'

export const BookingRequestDeleteManyArgsSchema: z.ZodType<Prisma.BookingRequestDeleteManyArgs> = z.object({
  where: BookingRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingRequestDeleteManyArgsSchema;
