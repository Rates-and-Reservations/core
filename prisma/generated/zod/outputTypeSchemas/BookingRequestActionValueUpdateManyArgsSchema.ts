import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingRequestActionValueUpdateManyMutationInputSchema'
import { BookingRequestActionValueUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingRequestActionValueUncheckedUpdateManyInputSchema'
import { BookingRequestActionValueWhereInputSchema } from '../inputTypeSchemas/BookingRequestActionValueWhereInputSchema'

export const BookingRequestActionValueUpdateManyArgsSchema: z.ZodType<Prisma.BookingRequestActionValueUpdateManyArgs> = z.object({
  data: z.union([ BookingRequestActionValueUpdateManyMutationInputSchema,BookingRequestActionValueUncheckedUpdateManyInputSchema ]),
  where: BookingRequestActionValueWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingRequestActionValueUpdateManyArgsSchema;
