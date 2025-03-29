import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueCreateManyInputSchema } from '../inputTypeSchemas/BookingRequestActionValueCreateManyInputSchema'

export const BookingRequestActionValueCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingRequestActionValueCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingRequestActionValueCreateManyInputSchema,BookingRequestActionValueCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingRequestActionValueCreateManyAndReturnArgsSchema;
