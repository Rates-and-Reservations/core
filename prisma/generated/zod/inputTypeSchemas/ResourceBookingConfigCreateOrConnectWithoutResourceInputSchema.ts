import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';
import { ResourceBookingConfigCreateWithoutResourceInputSchema } from './ResourceBookingConfigCreateWithoutResourceInputSchema';
import { ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema } from './ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema';

export const ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema: z.ZodType<Prisma.ResourceBookingConfigCreateOrConnectWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceBookingConfigCreateWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema;
