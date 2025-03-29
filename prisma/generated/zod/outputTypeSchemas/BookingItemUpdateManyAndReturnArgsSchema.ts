import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingItemUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingItemUpdateManyMutationInputSchema'
import { BookingItemUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingItemUncheckedUpdateManyInputSchema'
import { BookingItemWhereInputSchema } from '../inputTypeSchemas/BookingItemWhereInputSchema'

export const BookingItemUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingItemUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BookingItemUpdateManyMutationInputSchema,BookingItemUncheckedUpdateManyInputSchema ]),
  where: BookingItemWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingItemUpdateManyAndReturnArgsSchema;
