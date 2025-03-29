import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigScalarWhereInputSchema } from './ResourceBookingConfigScalarWhereInputSchema';
import { ResourceBookingConfigUpdateManyMutationInputSchema } from './ResourceBookingConfigUpdateManyMutationInputSchema';
import { ResourceBookingConfigUncheckedUpdateManyWithoutResourceInputSchema } from './ResourceBookingConfigUncheckedUpdateManyWithoutResourceInputSchema';

export const ResourceBookingConfigUpdateManyWithWhereWithoutResourceInputSchema: z.ZodType<Prisma.ResourceBookingConfigUpdateManyWithWhereWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceBookingConfigScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ResourceBookingConfigUpdateManyMutationInputSchema),z.lazy(() => ResourceBookingConfigUncheckedUpdateManyWithoutResourceInputSchema) ]),
}).strict();

export default ResourceBookingConfigUpdateManyWithWhereWithoutResourceInputSchema;
