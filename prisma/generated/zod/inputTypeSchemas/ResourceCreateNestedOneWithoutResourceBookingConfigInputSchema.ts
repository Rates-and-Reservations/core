import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutResourceBookingConfigInputSchema } from './ResourceCreateWithoutResourceBookingConfigInputSchema';
import { ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema } from './ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema';
import { ResourceCreateOrConnectWithoutResourceBookingConfigInputSchema } from './ResourceCreateOrConnectWithoutResourceBookingConfigInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';

export const ResourceCreateNestedOneWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutResourceBookingConfigInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutResourceBookingConfigInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResourceBookingConfigInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional()
}).strict();

export default ResourceCreateNestedOneWithoutResourceBookingConfigInputSchema;
