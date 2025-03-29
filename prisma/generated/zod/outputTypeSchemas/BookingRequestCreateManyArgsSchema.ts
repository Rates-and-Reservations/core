import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestCreateManyInputSchema } from '../inputTypeSchemas/BookingRequestCreateManyInputSchema'

export const BookingRequestCreateManyArgsSchema: z.ZodType<Prisma.BookingRequestCreateManyArgs> = z.object({
  data: z.union([ BookingRequestCreateManyInputSchema,BookingRequestCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingRequestCreateManyArgsSchema;
