import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRateSnapshotCreateManyRateInputSchema } from './BookingRateSnapshotCreateManyRateInputSchema';

export const BookingRateSnapshotCreateManyRateInputEnvelopeSchema: z.ZodType<Prisma.BookingRateSnapshotCreateManyRateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRateSnapshotCreateManyRateInputSchema),z.lazy(() => BookingRateSnapshotCreateManyRateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRateSnapshotCreateManyRateInputEnvelopeSchema;
