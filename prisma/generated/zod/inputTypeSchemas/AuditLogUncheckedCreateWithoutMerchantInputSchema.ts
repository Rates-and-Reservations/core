import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AuditLogUncheckedCreateWithoutMerchantInputSchema: z.ZodType<Prisma.AuditLogUncheckedCreateWithoutMerchantInput> = z.object({
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
  createdAt: z.coerce.date().optional()
}).strict();

export default AuditLogUncheckedCreateWithoutMerchantInputSchema;
