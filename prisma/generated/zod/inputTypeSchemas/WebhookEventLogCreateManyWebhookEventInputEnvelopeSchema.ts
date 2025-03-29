import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventLogCreateManyWebhookEventInputSchema } from './WebhookEventLogCreateManyWebhookEventInputSchema';

export const WebhookEventLogCreateManyWebhookEventInputEnvelopeSchema: z.ZodType<Prisma.WebhookEventLogCreateManyWebhookEventInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => WebhookEventLogCreateManyWebhookEventInputSchema),z.lazy(() => WebhookEventLogCreateManyWebhookEventInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default WebhookEventLogCreateManyWebhookEventInputEnvelopeSchema;
