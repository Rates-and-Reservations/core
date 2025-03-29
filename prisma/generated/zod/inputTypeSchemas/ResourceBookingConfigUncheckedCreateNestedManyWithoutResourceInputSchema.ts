import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigCreateWithoutResourceInputSchema } from './ResourceBookingConfigCreateWithoutResourceInputSchema';
import { ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema } from './ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema';
import { ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema } from './ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema';
import { ResourceBookingConfigCreateManyResourceInputEnvelopeSchema } from './ResourceBookingConfigCreateManyResourceInputEnvelopeSchema';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';

export const ResourceBookingConfigUncheckedCreateNestedManyWithoutResourceInputSchema: z.ZodType<Prisma.ResourceBookingConfigUncheckedCreateNestedManyWithoutResourceInput> = z.object({
  create: z.union([ z.lazy(() => ResourceBookingConfigCreateWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigCreateWithoutResourceInputSchema).array(),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceBookingConfigCreateManyResourceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ResourceBookingConfigUncheckedCreateNestedManyWithoutResourceInputSchema;
