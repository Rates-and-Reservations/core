import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';
import { ResourceBookingConfigUpdateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUpdateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigUncheckedUpdateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUncheckedUpdateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema';

export const ResourceBookingConfigUpsertWithWhereUniqueWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.ResourceBookingConfigUpsertWithWhereUniqueWithoutCancellationPolicyInput> = z.object({
  where: z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ResourceBookingConfigUpdateWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUncheckedUpdateWithoutCancellationPolicyInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema) ]),
}).strict();

export default ResourceBookingConfigUpsertWithWhereUniqueWithoutCancellationPolicyInputSchema;
