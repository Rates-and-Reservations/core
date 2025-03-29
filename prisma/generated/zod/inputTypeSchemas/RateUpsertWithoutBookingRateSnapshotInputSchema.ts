import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateUpdateWithoutBookingRateSnapshotInputSchema } from './RateUpdateWithoutBookingRateSnapshotInputSchema';
import { RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema } from './RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema';
import { RateCreateWithoutBookingRateSnapshotInputSchema } from './RateCreateWithoutBookingRateSnapshotInputSchema';
import { RateUncheckedCreateWithoutBookingRateSnapshotInputSchema } from './RateUncheckedCreateWithoutBookingRateSnapshotInputSchema';
import { RateWhereInputSchema } from './RateWhereInputSchema';

export const RateUpsertWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.RateUpsertWithoutBookingRateSnapshotInput> = z.object({
  update: z.union([ z.lazy(() => RateUpdateWithoutBookingRateSnapshotInputSchema),z.lazy(() => RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema) ]),
  create: z.union([ z.lazy(() => RateCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => RateUncheckedCreateWithoutBookingRateSnapshotInputSchema) ]),
  where: z.lazy(() => RateWhereInputSchema).optional()
}).strict();

export default RateUpsertWithoutBookingRateSnapshotInputSchema;
