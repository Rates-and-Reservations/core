import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueCreateManyInputSchema } from '../inputTypeSchemas/BookingRequestActionValueCreateManyInputSchema'

export const BookingRequestActionValueCreateManyArgsSchema: z.ZodType<Prisma.BookingRequestActionValueCreateManyArgs> = z.object({
  data: z.union([ BookingRequestActionValueCreateManyInputSchema,BookingRequestActionValueCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingRequestActionValueCreateManyArgsSchema;
