import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { NotificationTemplateCountOrderByAggregateInputSchema } from './NotificationTemplateCountOrderByAggregateInputSchema';
import { NotificationTemplateMaxOrderByAggregateInputSchema } from './NotificationTemplateMaxOrderByAggregateInputSchema';
import { NotificationTemplateMinOrderByAggregateInputSchema } from './NotificationTemplateMinOrderByAggregateInputSchema';

export const NotificationTemplateOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationTemplateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  channel: z.lazy(() => SortOrderSchema).optional(),
  subject: z.lazy(() => SortOrderSchema).optional(),
  body: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NotificationTemplateCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NotificationTemplateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NotificationTemplateMinOrderByAggregateInputSchema).optional()
}).strict();

export default NotificationTemplateOrderByWithAggregationInputSchema;
