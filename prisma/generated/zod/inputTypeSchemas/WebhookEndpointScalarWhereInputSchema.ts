import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const WebhookEndpointScalarWhereInputSchema: z.ZodType<Prisma.WebhookEndpointScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WebhookEndpointScalarWhereInputSchema),z.lazy(() => WebhookEndpointScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WebhookEndpointScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WebhookEndpointScalarWhereInputSchema),z.lazy(() => WebhookEndpointScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  secret: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  events: z.lazy(() => JsonFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default WebhookEndpointScalarWhereInputSchema;
