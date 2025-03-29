import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemAddOnCreateManyInputSchema } from '../inputTypeSchemas/BookingItemAddOnCreateManyInputSchema'

export const BookingItemAddOnCreateManyArgsSchema: z.ZodType<Prisma.BookingItemAddOnCreateManyArgs> = z.object({
  data: z.union([ BookingItemAddOnCreateManyInputSchema,BookingItemAddOnCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingItemAddOnCreateManyArgsSchema;
