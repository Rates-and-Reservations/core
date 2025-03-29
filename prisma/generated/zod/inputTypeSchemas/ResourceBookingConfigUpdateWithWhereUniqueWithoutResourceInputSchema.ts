import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';
import { ResourceBookingConfigUpdateWithoutResourceInputSchema } from './ResourceBookingConfigUpdateWithoutResourceInputSchema';
import { ResourceBookingConfigUncheckedUpdateWithoutResourceInputSchema } from './ResourceBookingConfigUncheckedUpdateWithoutResourceInputSchema';

export const ResourceBookingConfigUpdateWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.ResourceBookingConfigUpdateWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ResourceBookingConfigUpdateWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUncheckedUpdateWithoutResourceInputSchema) ]),
}).strict();

export default ResourceBookingConfigUpdateWithWhereUniqueWithoutResourceInputSchema;
