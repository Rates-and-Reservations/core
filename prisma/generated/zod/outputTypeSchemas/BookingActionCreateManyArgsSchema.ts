import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionCreateManyInputSchema } from '../inputTypeSchemas/BookingActionCreateManyInputSchema'

export const BookingActionCreateManyArgsSchema: z.ZodType<Prisma.BookingActionCreateManyArgs> = z.object({
  data: z.union([ BookingActionCreateManyInputSchema,BookingActionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingActionCreateManyArgsSchema;
