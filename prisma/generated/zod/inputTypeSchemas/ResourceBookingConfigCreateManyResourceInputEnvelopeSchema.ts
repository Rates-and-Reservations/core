import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceBookingConfigCreateManyResourceInputSchema } from './ResourceBookingConfigCreateManyResourceInputSchema';

export const ResourceBookingConfigCreateManyResourceInputEnvelopeSchema: z.ZodType<Prisma.ResourceBookingConfigCreateManyResourceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ResourceBookingConfigCreateManyResourceInputSchema),z.lazy(() => ResourceBookingConfigCreateManyResourceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ResourceBookingConfigCreateManyResourceInputEnvelopeSchema;
