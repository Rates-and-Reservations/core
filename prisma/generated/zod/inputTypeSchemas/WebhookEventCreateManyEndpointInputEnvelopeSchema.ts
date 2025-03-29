import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateManyEndpointInputSchema } from './WebhookEventCreateManyEndpointInputSchema';

export const WebhookEventCreateManyEndpointInputEnvelopeSchema: z.ZodType<Prisma.WebhookEventCreateManyEndpointInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WebhookEventCreateManyEndpointInputSchema),z.lazy(() => WebhookEventCreateManyEndpointInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WebhookEventCreateManyEndpointInputEnvelopeSchema;
