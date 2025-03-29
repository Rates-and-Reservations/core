import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WebhookEventUncheckedCreateNestedManyWithoutEndpointInputSchema } from './WebhookEventUncheckedCreateNestedManyWithoutEndpointInputSchema';

export const WebhookEndpointUncheckedCreateWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEndpointUncheckedCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  url: z.string(),
  secret: z.string(),
  events: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  WebhookEvent: z.lazy(() => WebhookEventUncheckedCreateNestedManyWithoutEndpointInputSchema).optional()
}).strict();

export default WebhookEndpointUncheckedCreateWithoutMerchantInputSchema;
