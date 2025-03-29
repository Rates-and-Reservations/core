import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemCreateManyInputSchema } from '../inputTypeSchemas/BookingItemCreateManyInputSchema'

export const BookingItemCreateManyArgsSchema: z.ZodType<Prisma.BookingItemCreateManyArgs> = z.object({
  data: z.union([ BookingItemCreateManyInputSchema,BookingItemCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingItemCreateManyArgsSchema;
