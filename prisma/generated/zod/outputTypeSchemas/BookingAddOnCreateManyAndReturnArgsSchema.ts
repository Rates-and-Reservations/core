import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnCreateManyInputSchema } from '../inputTypeSchemas/BookingAddOnCreateManyInputSchema'

export const BookingAddOnCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingAddOnCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingAddOnCreateManyInputSchema,BookingAddOnCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingAddOnCreateManyAndReturnArgsSchema;
