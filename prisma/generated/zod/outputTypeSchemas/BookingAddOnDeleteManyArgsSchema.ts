import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnWhereInputSchema } from '../inputTypeSchemas/BookingAddOnWhereInputSchema'

export const BookingAddOnDeleteManyArgsSchema: z.ZodType<Prisma.BookingAddOnDeleteManyArgs> = z.object({
  where: BookingAddOnWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingAddOnDeleteManyArgsSchema;
