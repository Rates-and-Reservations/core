import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';
import { ResourceBookingConfigUpdateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUpdateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigUncheckedUpdateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUncheckedUpdateWithoutCancellationPolicyInputSchema';

export const ResourceBookingConfigUpdateWithWhereUniqueWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.ResourceBookingConfigUpdateWithWhereUniqueWithoutCancellationPolicyInput> = z.object({
  where: z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ResourceBookingConfigUpdateWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUncheckedUpdateWithoutCancellationPolicyInputSchema) ]),
}).strict();

export default ResourceBookingConfigUpdateWithWhereUniqueWithoutCancellationPolicyInputSchema;
