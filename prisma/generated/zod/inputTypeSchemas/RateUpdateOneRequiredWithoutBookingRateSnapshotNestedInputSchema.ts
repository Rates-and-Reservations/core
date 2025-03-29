import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateWithoutBookingRateSnapshotInputSchema } from './RateCreateWithoutBookingRateSnapshotInputSchema';
import { RateUncheckedCreateWithoutBookingRateSnapshotInputSchema } from './RateUncheckedCreateWithoutBookingRateSnapshotInputSchema';
import { RateCreateOrConnectWithoutBookingRateSnapshotInputSchema } from './RateCreateOrConnectWithoutBookingRateSnapshotInputSchema';
import { RateUpsertWithoutBookingRateSnapshotInputSchema } from './RateUpsertWithoutBookingRateSnapshotInputSchema';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateToOneWithWhereWithoutBookingRateSnapshotInputSchema } from './RateUpdateToOneWithWhereWithoutBookingRateSnapshotInputSchema';
import { RateUpdateWithoutBookingRateSnapshotInputSchema } from './RateUpdateWithoutBookingRateSnapshotInputSchema';
import { RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema } from './RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema';

export const RateUpdateOneRequiredWithoutBookingRateSnapshotNestedInputSchema: z.ZodType<Prisma.RateUpdateOneRequiredWithoutBookingRateSnapshotNestedInput> = z.object({
  create: z.union([ z.lazy(() => RateCreateWithoutBookingRateSnapshotInputSchema),z.lazy(() => RateUncheckedCreateWithoutBookingRateSnapshotInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RateCreateOrConnectWithoutBookingRateSnapshotInputSchema).optional(),
  upsert: z.lazy(() => RateUpsertWithoutBookingRateSnapshotInputSchema).optional(),
  connect: z.lazy(() => RateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RateUpdateToOneWithWhereWithoutBookingRateSnapshotInputSchema),z.lazy(() => RateUpdateWithoutBookingRateSnapshotInputSchema),z.lazy(() => RateUncheckedUpdateWithoutBookingRateSnapshotInputSchema) ]).optional(),
}).strict();

export default RateUpdateOneRequiredWithoutBookingRateSnapshotNestedInputSchema;
