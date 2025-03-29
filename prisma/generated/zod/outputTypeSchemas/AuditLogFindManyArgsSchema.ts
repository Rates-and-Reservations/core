import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogIncludeSchema } from '../inputTypeSchemas/AuditLogIncludeSchema'
import { AuditLogWhereInputSchema } from '../inputTypeSchemas/AuditLogWhereInputSchema'
import { AuditLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuditLogOrderByWithRelationInputSchema'
import { AuditLogWhereUniqueInputSchema } from '../inputTypeSchemas/AuditLogWhereUniqueInputSchema'
import { AuditLogScalarFieldEnumSchema } from '../inputTypeSchemas/AuditLogScalarFieldEnumSchema'
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

export const AuditLogFindManyArgsSchema: z.ZodType<Prisma.AuditLogFindManyArgs> = z.object({
  select: AuditLogSelectSchema.optional(),
  include: z.lazy(() => AuditLogIncludeSchema).optional(),
  where: AuditLogWhereInputSchema.optional(),
  orderBy: z.union([ AuditLogOrderByWithRelationInputSchema.array(),AuditLogOrderByWithRelationInputSchema ]).optional(),
  cursor: AuditLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuditLogScalarFieldEnumSchema,AuditLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AuditLogFindManyArgsSchema;
