import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';
import { ResourceBookingConfigUpdateWithoutResourceInputSchema } from './ResourceBookingConfigUpdateWithoutResourceInputSchema';
import { ResourceBookingConfigUncheckedUpdateWithoutResourceInputSchema } from './ResourceBookingConfigUncheckedUpdateWithoutResourceInputSchema';
import { ResourceBookingConfigCreateWithoutResourceInputSchema } from './ResourceBookingConfigCreateWithoutResourceInputSchema';
import { ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema } from './ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema';

export const ResourceBookingConfigUpsertWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.ResourceBookingConfigUpsertWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ResourceBookingConfigUpdateWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUncheckedUpdateWithoutResourceInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceBookingConfigCreateWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default ResourceBookingConfigUpsertWithWhereUniqueWithoutResourceInputSchema;
