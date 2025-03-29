import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuditLogWhereInputSchema } from './AuditLogWhereInputSchema';

export const AuditLogListRelationFilterSchema: z.ZodType<Prisma.AuditLogListRelationFilter> = z.object({
  every: z.lazy(() => AuditLogWhereInputSchema).optional(),
  some: z.lazy(() => AuditLogWhereInputSchema).optional(),
  none: z.lazy(() => AuditLogWhereInputSchema).optional()
}).strict();

export default AuditLogListRelationFilterSchema;
