import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointWhereInputSchema } from './WebhookEndpointWhereInputSchema';

export const WebhookEndpointListRelationFilterSchema: z.ZodType<Prisma.WebhookEndpointListRelationFilter> = z.object({
  every: z.lazy(() => WebhookEndpointWhereInputSchema).optional(),
  some: z.lazy(() => WebhookEndpointWhereInputSchema).optional(),
  none: z.lazy(() => WebhookEndpointWhereInputSchema).optional()
}).strict();

export default WebhookEndpointListRelationFilterSchema;
