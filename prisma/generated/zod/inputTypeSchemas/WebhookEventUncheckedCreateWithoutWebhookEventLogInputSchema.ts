import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';

export const WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema: z.ZodType<Prisma.WebhookEventUncheckedCreateWithoutWebhookEventLogInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  endpointId: z.string(),
  eventType: z.lazy(() => WebhookEventTypeSchema),
  payload: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  status: z.lazy(() => WebhookEventStatusSchema).optional(),
  responseCode: z.number().int().optional().nullable(),
  responseBody: z.string().optional().nullable(),
  errorMessage: z.string().optional().nullable(),
  retryCount: z.number().int().optional(),
  nextRetryAt: z.coerce.date().optional().nullable(),
  sentAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WebhookEventUncheckedCreateWithoutWebhookEventLogInputSchema;
