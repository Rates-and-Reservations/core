import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateNestedOneWithoutWebhookEventLogInputSchema } from './WebhookEventCreateNestedOneWithoutWebhookEventLogInputSchema';

export const WebhookEventLogCreateInputSchema: z.ZodType<Prisma.WebhookEventLogCreateInput> = z.object({
  id: z.string().cuid().optional(),
  attemptNumber: z.number().int(),
  responseCode: z.number().int(),
  responseBody: z.string().optional().nullable(),
  errorMessage: z.string().optional().nullable(),
  sentAt: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  webhookEvent: z.lazy(() => WebhookEventCreateNestedOneWithoutWebhookEventLogInputSchema)
}).strict();

export default WebhookEventLogCreateInputSchema;
