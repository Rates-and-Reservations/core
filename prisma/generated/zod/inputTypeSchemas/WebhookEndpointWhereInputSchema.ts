import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { WebhookEventListRelationFilterSchema } from './WebhookEventListRelationFilterSchema';

export const WebhookEndpointWhereInputSchema: z.ZodType<Prisma.WebhookEndpointWhereInput> = z.object({
  AND: z.union([ z.lazy(() => WebhookEndpointWhereInputSchema),z.lazy(() => WebhookEndpointWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => WebhookEndpointWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => WebhookEndpointWhereInputSchema),z.lazy(() => WebhookEndpointWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  secret: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  events: z.lazy(() => JsonFilterSchema).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  WebhookEvent: z.lazy(() => WebhookEventListRelationFilterSchema).optional()
}).strict();

export default WebhookEndpointWhereInputSchema;
