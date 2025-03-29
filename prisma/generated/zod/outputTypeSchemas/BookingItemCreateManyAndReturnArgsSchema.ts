import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemCreateManyInputSchema } from '../inputTypeSchemas/BookingItemCreateManyInputSchema'

export const BookingItemCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingItemCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingItemCreateManyInputSchema,BookingItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingItemCreateManyAndReturnArgsSchema;
