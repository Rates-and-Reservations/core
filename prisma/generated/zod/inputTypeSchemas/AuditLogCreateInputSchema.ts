import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateNestedOneWithoutAuditLogInputSchema } from './MerchantCreateNestedOneWithoutAuditLogInputSchema';

export const AuditLogCreateInputSchema: z.ZodType<Prisma.AuditLogCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional().nullable(),
  action: z.string(),
  resourceType: z.string(),
  resourceId: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  ipAddress: z.string().optional().nullable(),
  userAgent: z.string().optional().nullable(),
  performedAt: z.coerce.date().optional().nullable(),
  performedBy: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutAuditLogInputSchema)
}).strict();

export default AuditLogCreateInputSchema;
