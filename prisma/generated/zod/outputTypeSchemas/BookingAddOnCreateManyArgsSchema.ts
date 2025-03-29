import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnCreateManyInputSchema } from '../inputTypeSchemas/BookingAddOnCreateManyInputSchema'

export const BookingAddOnCreateManyArgsSchema: z.ZodType<Prisma.BookingAddOnCreateManyArgs> = z.object({
  data: z.union([ BookingAddOnCreateManyInputSchema,BookingAddOnCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingAddOnCreateManyArgsSchema;
