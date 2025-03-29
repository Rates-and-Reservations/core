import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingAddOnUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingAddOnUpdateManyMutationInputSchema'
import { BookingAddOnUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingAddOnUncheckedUpdateManyInputSchema'
import { BookingAddOnWhereInputSchema } from '../inputTypeSchemas/BookingAddOnWhereInputSchema'

export const BookingAddOnUpdateManyArgsSchema: z.ZodType<Prisma.BookingAddOnUpdateManyArgs> = z.object({
  data: z.union([ BookingAddOnUpdateManyMutationInputSchema,BookingAddOnUncheckedUpdateManyInputSchema ]),
  where: BookingAddOnWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingAddOnUpdateManyArgsSchema;
