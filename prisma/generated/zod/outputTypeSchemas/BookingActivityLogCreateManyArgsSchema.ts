import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogCreateManyInputSchema } from '../inputTypeSchemas/BookingActivityLogCreateManyInputSchema'

export const BookingActivityLogCreateManyArgsSchema: z.ZodType<Prisma.BookingActivityLogCreateManyArgs> = z.object({
  data: z.union([ BookingActivityLogCreateManyInputSchema,BookingActivityLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingActivityLogCreateManyArgsSchema;
