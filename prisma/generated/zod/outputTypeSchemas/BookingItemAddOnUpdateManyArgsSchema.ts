import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemAddOnUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingItemAddOnUpdateManyMutationInputSchema'
import { BookingItemAddOnUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingItemAddOnUncheckedUpdateManyInputSchema'
import { BookingItemAddOnWhereInputSchema } from '../inputTypeSchemas/BookingItemAddOnWhereInputSchema'

export const BookingItemAddOnUpdateManyArgsSchema: z.ZodType<Prisma.BookingItemAddOnUpdateManyArgs> = z.object({
  data: z.union([ BookingItemAddOnUpdateManyMutationInputSchema,BookingItemAddOnUncheckedUpdateManyInputSchema ]),
  where: BookingItemAddOnWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingItemAddOnUpdateManyArgsSchema;
