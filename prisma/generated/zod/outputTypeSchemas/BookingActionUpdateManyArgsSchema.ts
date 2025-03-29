import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActionUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingActionUpdateManyMutationInputSchema'
import { BookingActionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingActionUncheckedUpdateManyInputSchema'
import { BookingActionWhereInputSchema } from '../inputTypeSchemas/BookingActionWhereInputSchema'

export const BookingActionUpdateManyArgsSchema: z.ZodType<Prisma.BookingActionUpdateManyArgs> = z.object({
  data: z.union([ BookingActionUpdateManyMutationInputSchema,BookingActionUncheckedUpdateManyInputSchema ]),
  where: BookingActionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingActionUpdateManyArgsSchema;
