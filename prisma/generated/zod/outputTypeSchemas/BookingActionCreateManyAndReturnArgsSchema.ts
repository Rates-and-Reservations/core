import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionCreateManyInputSchema } from '../inputTypeSchemas/BookingActionCreateManyInputSchema'

export const BookingActionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingActionCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingActionCreateManyInputSchema,BookingActionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingActionCreateManyAndReturnArgsSchema;
