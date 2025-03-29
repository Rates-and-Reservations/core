import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestFlowUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingRequestFlowUpdateManyMutationInputSchema'
import { BookingRequestFlowUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingRequestFlowUncheckedUpdateManyInputSchema'
import { BookingRequestFlowWhereInputSchema } from '../inputTypeSchemas/BookingRequestFlowWhereInputSchema'

export const BookingRequestFlowUpdateManyArgsSchema: z.ZodType<Prisma.BookingRequestFlowUpdateManyArgs> = z.object({
  data: z.union([ BookingRequestFlowUpdateManyMutationInputSchema,BookingRequestFlowUncheckedUpdateManyInputSchema ]),
  where: BookingRequestFlowWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingRequestFlowUpdateManyArgsSchema;
