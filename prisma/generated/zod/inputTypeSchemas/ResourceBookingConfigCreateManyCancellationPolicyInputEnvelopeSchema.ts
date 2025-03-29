import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigCreateManyCancellationPolicyInputSchema } from './ResourceBookingConfigCreateManyCancellationPolicyInputSchema';

export const ResourceBookingConfigCreateManyCancellationPolicyInputEnvelopeSchema: z.ZodType<Prisma.ResourceBookingConfigCreateManyCancellationPolicyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ResourceBookingConfigCreateManyCancellationPolicyInputSchema),z.lazy(() => ResourceBookingConfigCreateManyCancellationPolicyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ResourceBookingConfigCreateManyCancellationPolicyInputEnvelopeSchema;
