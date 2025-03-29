import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingActivityLogUpdateManyMutationInputSchema'
import { BookingActivityLogUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingActivityLogUncheckedUpdateManyInputSchema'
import { BookingActivityLogWhereInputSchema } from '../inputTypeSchemas/BookingActivityLogWhereInputSchema'

export const BookingActivityLogUpdateManyArgsSchema: z.ZodType<Prisma.BookingActivityLogUpdateManyArgs> = z.object({
  data: z.union([ BookingActivityLogUpdateManyMutationInputSchema,BookingActivityLogUncheckedUpdateManyInputSchema ]),
  where: BookingActivityLogWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingActivityLogUpdateManyArgsSchema;
