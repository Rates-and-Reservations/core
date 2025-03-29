import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AuditLogCountOrderByAggregateInputSchema } from './AuditLogCountOrderByAggregateInputSchema';
import { AuditLogMaxOrderByAggregateInputSchema } from './AuditLogMaxOrderByAggregateInputSchema';
import { AuditLogMinOrderByAggregateInputSchema } from './AuditLogMinOrderByAggregateInputSchema';

export const AuditLogOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuditLogOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  resourceType: z.lazy(() => SortOrderSchema).optional(),
  resourceId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ipAddress: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  userAgent: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  performedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  performedBy: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AuditLogCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuditLogMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuditLogMinOrderByAggregateInputSchema).optional()
}).strict();

export default AuditLogOrderByWithAggregationInputSchema;
