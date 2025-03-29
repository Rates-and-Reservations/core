import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigScalarWhereInputSchema } from './ResourceBookingConfigScalarWhereInputSchema';
import { ResourceBookingConfigUpdateManyMutationInputSchema } from './ResourceBookingConfigUpdateManyMutationInputSchema';
import { ResourceBookingConfigUncheckedUpdateManyWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUncheckedUpdateManyWithoutCancellationPolicyInputSchema';

export const ResourceBookingConfigUpdateManyWithWhereWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.ResourceBookingConfigUpdateManyWithWhereWithoutCancellationPolicyInput> = z.object({
  where: z.lazy(() => ResourceBookingConfigScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ResourceBookingConfigUpdateManyMutationInputSchema),z.lazy(() => ResourceBookingConfigUncheckedUpdateManyWithoutCancellationPolicyInputSchema) ]),
}).strict();

export default ResourceBookingConfigUpdateManyWithWhereWithoutCancellationPolicyInputSchema;
