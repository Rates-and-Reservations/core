import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigCreateWithoutResourceInputSchema } from './ResourceBookingConfigCreateWithoutResourceInputSchema';
import { ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema } from './ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema';
import { ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema } from './ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema';
import { ResourceBookingConfigUpsertWithWhereUniqueWithoutResourceInputSchema } from './ResourceBookingConfigUpsertWithWhereUniqueWithoutResourceInputSchema';
import { ResourceBookingConfigCreateManyResourceInputEnvelopeSchema } from './ResourceBookingConfigCreateManyResourceInputEnvelopeSchema';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';
import { ResourceBookingConfigUpdateWithWhereUniqueWithoutResourceInputSchema } from './ResourceBookingConfigUpdateWithWhereUniqueWithoutResourceInputSchema';
import { ResourceBookingConfigUpdateManyWithWhereWithoutResourceInputSchema } from './ResourceBookingConfigUpdateManyWithWhereWithoutResourceInputSchema';
import { ResourceBookingConfigScalarWhereInputSchema } from './ResourceBookingConfigScalarWhereInputSchema';

export const ResourceBookingConfigUncheckedUpdateManyWithoutResourceNestedInputSchema: z.ZodType<Prisma.ResourceBookingConfigUncheckedUpdateManyWithoutResourceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceBookingConfigCreateWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigCreateWithoutResourceInputSchema).array(),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResourceBookingConfigUpsertWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUpsertWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceBookingConfigCreateManyResourceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResourceBookingConfigUpdateWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUpdateWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResourceBookingConfigUpdateManyWithWhereWithoutResourceInputSchema),z.lazy(() => ResourceBookingConfigUpdateManyWithWhereWithoutResourceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResourceBookingConfigScalarWhereInputSchema),z.lazy(() => ResourceBookingConfigScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ResourceBookingConfigUncheckedUpdateManyWithoutResourceNestedInputSchema;
