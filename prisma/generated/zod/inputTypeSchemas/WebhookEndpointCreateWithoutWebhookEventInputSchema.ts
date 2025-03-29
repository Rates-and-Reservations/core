import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantCreateNestedOneWithoutWebhookEndpointInputSchema } from './MerchantCreateNestedOneWithoutWebhookEndpointInputSchema';

export const WebhookEndpointCreateWithoutWebhookEventInputSchema: z.ZodType<Prisma.WebhookEndpointCreateWithoutWebhookEventInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  url: z.string(),
  secret: z.string(),
  events: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutWebhookEndpointInputSchema)
}).strict();

export default WebhookEndpointCreateWithoutWebhookEventInputSchema;
