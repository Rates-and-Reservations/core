import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutResourceBookingConfigInputSchema } from './ResourceCreateWithoutResourceBookingConfigInputSchema';
import { ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema } from './ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema';
import { ResourceCreateOrConnectWithoutResourceBookingConfigInputSchema } from './ResourceCreateOrConnectWithoutResourceBookingConfigInputSchema';
import { ResourceUpsertWithoutResourceBookingConfigInputSchema } from './ResourceUpsertWithoutResourceBookingConfigInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema } from './ResourceUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema';
import { ResourceUpdateWithoutResourceBookingConfigInputSchema } from './ResourceUpdateWithoutResourceBookingConfigInputSchema';
import { ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema } from './ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema';

export const ResourceUpdateOneRequiredWithoutResourceBookingConfigNestedInputSchema: z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutResourceBookingConfigNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutResourceBookingConfigInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutResourceBookingConfigInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResourceBookingConfigInputSchema).optional(),
  upsert: z.lazy(() => ResourceUpsertWithoutResourceBookingConfigInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ResourceUpdateToOneWithWhereWithoutResourceBookingConfigInputSchema),z.lazy(() => ResourceUpdateWithoutResourceBookingConfigInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutResourceBookingConfigInputSchema) ]).optional(),
}).strict();

export default ResourceUpdateOneRequiredWithoutResourceBookingConfigNestedInputSchema;
