import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueWhereInputSchema } from '../inputTypeSchemas/BookingRequestActionValueWhereInputSchema'

export const BookingRequestActionValueDeleteManyArgsSchema: z.ZodType<Prisma.BookingRequestActionValueDeleteManyArgs> = z.object({
  where: BookingRequestActionValueWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingRequestActionValueDeleteManyArgsSchema;
