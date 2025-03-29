import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WebhookEventUncheckedCreateNestedManyWithoutEndpointInputSchema } from './WebhookEventUncheckedCreateNestedManyWithoutEndpointInputSchema';

export const WebhookEndpointUncheckedCreateInputSchema: z.ZodType<Prisma.WebhookEndpointUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  name: z.string(),
  url: z.string(),
  secret: z.string(),
  events: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  WebhookEvent: z.lazy(() => WebhookEventUncheckedCreateNestedManyWithoutEndpointInputSchema).optional()
}).strict();

export default WebhookEndpointUncheckedCreateInputSchema;
