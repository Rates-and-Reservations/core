import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigUpsertWithWhereUniqueWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUpsertWithWhereUniqueWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigCreateManyCancellationPolicyInputEnvelopeSchema } from './ResourceBookingConfigCreateManyCancellationPolicyInputEnvelopeSchema';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';
import { ResourceBookingConfigUpdateWithWhereUniqueWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUpdateWithWhereUniqueWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigUpdateManyWithWhereWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUpdateManyWithWhereWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigScalarWhereInputSchema } from './ResourceBookingConfigScalarWhereInputSchema';

export const ResourceBookingConfigUpdateManyWithoutCancellationPolicyNestedInputSchema: z.ZodType<Prisma.ResourceBookingConfigUpdateManyWithoutCancellationPolicyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema).array(),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResourceBookingConfigUpsertWithWhereUniqueWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUpsertWithWhereUniqueWithoutCancellationPolicyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceBookingConfigCreateManyCancellationPolicyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResourceBookingConfigUpdateWithWhereUniqueWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUpdateWithWhereUniqueWithoutCancellationPolicyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResourceBookingConfigUpdateManyWithWhereWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUpdateManyWithWhereWithoutCancellationPolicyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResourceBookingConfigScalarWhereInputSchema),z.lazy(() => ResourceBookingConfigScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ResourceBookingConfigUpdateManyWithoutCancellationPolicyNestedInputSchema;
