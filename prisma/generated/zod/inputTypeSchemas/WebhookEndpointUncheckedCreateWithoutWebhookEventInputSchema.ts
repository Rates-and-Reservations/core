import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEndpointUncheckedCreateWithoutWebhookEventInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  name: z.string(),
  url: z.string(),
  secret: z.string(),
  events: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default WebhookEndpointUncheckedCreateWithoutWebhookEventInputSchema;
