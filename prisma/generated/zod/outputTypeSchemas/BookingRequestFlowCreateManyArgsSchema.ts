import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestFlowCreateManyInputSchema } from '../inputTypeSchemas/BookingRequestFlowCreateManyInputSchema'

export const BookingRequestFlowCreateManyArgsSchema: z.ZodType<Prisma.BookingRequestFlowCreateManyArgs> = z.object({
  data: z.union([ BookingRequestFlowCreateManyInputSchema,BookingRequestFlowCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingRequestFlowCreateManyArgsSchema;
