import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointCreateManyMerchantInputSchema } from './WebhookEndpointCreateManyMerchantInputSchema';

export const WebhookEndpointCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.WebhookEndpointCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WebhookEndpointCreateManyMerchantInputSchema),z.lazy(() => WebhookEndpointCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WebhookEndpointCreateManyMerchantInputEnvelopeSchema;
