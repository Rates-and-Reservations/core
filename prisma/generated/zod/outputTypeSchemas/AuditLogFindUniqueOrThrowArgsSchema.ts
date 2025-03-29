import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogIncludeSchema } from '../inputTypeSchemas/AuditLogIncludeSchema'
import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuditLogSelectSchema: z.ZodType<Prisma.AuditLogSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  userId: z.boolean().optional(),
  action: z.boolean().optional(),
  resourceType: z.boolean().optional(),
  resourceId: z.boolean().optional(),
  description: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  performedAt: z.boolean().optional(),
  performedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
}).strict()

export const AuditLogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuditLogFindUniqueOrThrowArgs> = z.object({
  select: AuditLogSelectSchema.optional(),
  include: z.lazy(() => AuditLogIncludeSchema).optional(),
  where: AuditLogWhereUniqueInputSchema,
}).strict() ;

export default AuditLogFindUniqueOrThrowArgsSchema;
