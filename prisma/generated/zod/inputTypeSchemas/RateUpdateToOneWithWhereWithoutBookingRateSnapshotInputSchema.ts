import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereInputSchema } from './RateWhereInputSchema';
import { RateUpdateWithoutBookingRateSnapshotInputSchema } from './RateUpdateWithoutBookingRateSnapshotInputSchema';
import { RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema } from './RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema';

export const RateUpdateToOneWithWhereWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.RateUpdateToOneWithWhereWithoutBookingRateSnapshotInput> = z.object({
  where: z.lazy(() => RateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RateUpdateWithoutBookingRateSnapshotInputSchema),z.lazy(() => RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema) ]),
}).strict();

export default RateUpdateToOneWithWhereWithoutBookingRateSnapshotInputSchema;
