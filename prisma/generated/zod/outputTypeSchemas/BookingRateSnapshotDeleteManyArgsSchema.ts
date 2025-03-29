import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotWhereInputSchema } from '../inputTypeSchemas/BookingRateSnapshotWhereInputSchema'

export const BookingRateSnapshotDeleteManyArgsSchema: z.ZodType<Prisma.BookingRateSnapshotDeleteManyArgs> = z.object({
  where: BookingRateSnapshotWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default BookingRateSnapshotDeleteManyArgsSchema;
