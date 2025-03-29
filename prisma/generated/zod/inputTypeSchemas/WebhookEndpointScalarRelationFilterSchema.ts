import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointWhereInputSchema } from './WebhookEndpointWhereInputSchema';

export const WebhookEndpointScalarRelationFilterSchema: z.ZodType<Prisma.WebhookEndpointScalarRelationFilter> = z.object({
  is: z.lazy(() => WebhookEndpointWhereInputSchema).optional(),
  isNot: z.lazy(() => WebhookEndpointWhereInputSchema).optional()
}).strict();

export default WebhookEndpointScalarRelationFilterSchema;
