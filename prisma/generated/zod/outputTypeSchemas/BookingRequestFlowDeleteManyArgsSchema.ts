import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestFlowWhereInputSchema } from '../inputTypeSchemas/BookingRequestFlowWhereInputSchema'

export const BookingRequestFlowDeleteManyArgsSchema: z.ZodType<Prisma.BookingRequestFlowDeleteManyArgs> = z.object({
  where: BookingRequestFlowWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingRequestFlowDeleteManyArgsSchema;
