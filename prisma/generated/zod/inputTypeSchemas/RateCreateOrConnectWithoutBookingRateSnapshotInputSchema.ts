import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateCreateWithoutBookingRateSnapshotInputSchema } from './RateCreateWithoutBookingRateSnapshotInputSchema';
import { RateUncheckedCreateWithoutBookingRateSnapshotInputSchema } from './RateUncheckedCreateWithoutBookingRateSnapshotInputSchema';

export const RateCreateOrConnectWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.RateCreateOrConnectWithoutBookingRateSnapshotInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RateCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => RateUncheckedCreateWithoutBookingRateSnapshotInputSchema) ]),
}).strict();

export default RateCreateOrConnectWithoutBookingRateSnapshotInputSchema;
