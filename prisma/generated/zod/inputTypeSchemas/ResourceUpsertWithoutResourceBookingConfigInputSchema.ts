import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceUpdateWithoutResourceBookingConfigInputSchema } from './ResourceUpdateWithoutResourceBookingConfigInputSchema';
import { ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema } from './ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema';
import { ResourceCreateWithoutResourceBookingConfigInputSchema } from './ResourceCreateWithoutResourceBookingConfigInputSchema';
import { ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema } from './ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';

export const ResourceUpsertWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.ResourceUpsertWithoutResourceBookingConfigInput> = z.object({
  update: z.union([ z.lazy(() => ResourceUpdateWithoutResourceBookingConfigInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceCreateWithoutResourceBookingConfigInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema) ]),
  where: z.lazy(() => ResourceWhereInputSchema).optional()
}).strict();

export default ResourceUpsertWithoutResourceBookingConfigInputSchema;
