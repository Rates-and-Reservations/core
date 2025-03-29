import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateManyMerchantInputSchema } from './WebhookEventCreateManyMerchantInputSchema';

export const WebhookEventCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.WebhookEventCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WebhookEventCreateManyMerchantInputSchema),z.lazy(() => WebhookEventCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WebhookEventCreateManyMerchantInputEnvelopeSchema;
