import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingRequestUpdateManyMutationInputSchema'
import { BookingRequestUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingRequestUncheckedUpdateManyInputSchema'
import { BookingRequestWhereInputSchema } from '../inputTypeSchemas/BookingRequestWhereInputSchema'

export const BookingRequestUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingRequestUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BookingRequestUpdateManyMutationInputSchema,BookingRequestUncheckedUpdateManyInputSchema ]),
  where: BookingRequestWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingRequestUpdateManyAndReturnArgsSchema;
