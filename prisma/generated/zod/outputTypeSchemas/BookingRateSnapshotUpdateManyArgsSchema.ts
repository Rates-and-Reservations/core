import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotUpdateManyMutationInputSchema } from '../inputTypeSchemas/BookingRateSnapshotUpdateManyMutationInputSchema'
import { BookingRateSnapshotUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BookingRateSnapshotUncheckedUpdateManyInputSchema'
import { BookingRateSnapshotWhereInputSchema } from '../inputTypeSchemas/BookingRateSnapshotWhereInputSchema'

export const BookingRateSnapshotUpdateManyArgsSchema: z.ZodType<Prisma.BookingRateSnapshotUpdateManyArgs> = z.object({
  data: z.union([ BookingRateSnapshotUpdateManyMutationInputSchema,BookingRateSnapshotUncheckedUpdateManyInputSchema ]),
  where: BookingRateSnapshotWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingRateSnapshotUpdateManyArgsSchema;
