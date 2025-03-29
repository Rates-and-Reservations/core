import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutBookingRateSnapshotInputSchema } from './RateCreateWithoutBookingRateSnapshotInputSchema';
import { RateUncheckedCreateWithoutBookingRateSnapshotInputSchema } from './RateUncheckedCreateWithoutBookingRateSnapshotInputSchema';
import { RateCreateOrConnectWithoutBookingRateSnapshotInputSchema } from './RateCreateOrConnectWithoutBookingRateSnapshotInputSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';

export const RateCreateNestedOneWithoutBookingRateSnapshotInputSchema: z.ZodType<Prisma.RateCreateNestedOneWithoutBookingRateSnapshotInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => RateUncheckedCreateWithoutBookingRateSnapshotInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RateCreateOrConnectWithoutBookingRateSnapshotInputSchema).optional(),
  connect: z.lazy(() => RateWhereUniqueInputSchema).optional()
}).strict();

export default RateCreateNestedOneWithoutBookingRateSnapshotInputSchema;
