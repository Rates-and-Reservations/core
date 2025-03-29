import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AuditLogOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AuditLogOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default AuditLogOrderByRelationAggregateInputSchema;
