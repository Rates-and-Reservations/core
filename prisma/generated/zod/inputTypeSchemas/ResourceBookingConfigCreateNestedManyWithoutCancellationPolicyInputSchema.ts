import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema';
import { ResourceBookingConfigCreateManyCancellationPolicyInputEnvelopeSchema } from './ResourceBookingConfigCreateManyCancellationPolicyInputEnvelopeSchema';
import { ResourceBookingConfigWhereUniqueInputSchema } from './ResourceBookingConfigWhereUniqueInputSchema';

export const ResourceBookingConfigCreateNestedManyWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.ResourceBookingConfigCreateNestedManyWithoutCancellationPolicyInput> = z.object({
  create: z.union([ z.lazy(() => ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigCreateWithoutCancellationPolicyInputSchema).array(),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigUncheckedCreateWithoutCancellationPolicyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigCreateOrConnectWithoutCancellationPolicyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceBookingConfigCreateManyCancellationPolicyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema),z.lazy(() => ResourceBookingConfigWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ResourceBookingConfigCreateNestedManyWithoutCancellationPolicyInputSchema;
