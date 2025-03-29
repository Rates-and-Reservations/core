import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceCreateWithoutResourceBookingConfigInputSchema } from './ResourceCreateWithoutResourceBookingConfigInputSchema';
import { ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema } from './ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema';

export const ResourceCreateOrConnectWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutResourceBookingConfigInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceCreateWithoutResourceBookingConfigInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema) ]),
}).strict();

export default ResourceCreateOrConnectWithoutResourceBookingConfigInputSchema;
