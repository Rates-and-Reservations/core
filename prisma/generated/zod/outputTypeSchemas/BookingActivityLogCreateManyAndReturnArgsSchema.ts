import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogCreateManyInputSchema } from '../inputTypeSchemas/BookingActivityLogCreateManyInputSchema'

export const BookingActivityLogCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingActivityLogCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingActivityLogCreateManyInputSchema,BookingActivityLogCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingActivityLogCreateManyAndReturnArgsSchema;
