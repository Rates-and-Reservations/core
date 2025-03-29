import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestFlowCreateManyInputSchema } from '../inputTypeSchemas/BookingRequestFlowCreateManyInputSchema'

export const BookingRequestFlowCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingRequestFlowCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingRequestFlowCreateManyInputSchema,BookingRequestFlowCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingRequestFlowCreateManyAndReturnArgsSchema;
