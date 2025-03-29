import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { ResourceUpdateWithoutResourceBookingConfigInputSchema } from './ResourceUpdateWithoutResourceBookingConfigInputSchema';
import { ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema } from './ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema';

export const ResourceUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutResourceBookingConfigInput> = z.object({
  where: z.lazy(() => ResourceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ResourceUpdateWithoutResourceBookingConfigInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema) ]),
}).strict();

export default ResourceUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema;
