import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRateSnapshotCreateManyInputSchema } from '../inputTypeSchemas/BookingRateSnapshotCreateManyInputSchema'

export const BookingRateSnapshotCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingRateSnapshotCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingRateSnapshotCreateManyInputSchema,BookingRateSnapshotCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default BookingRateSnapshotCreateManyAndReturnArgsSchema;
