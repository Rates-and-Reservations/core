import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';
import { ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema';

export const ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInput> = z.object({
  where: z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema) ]),
}).strict();

export default ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema;
