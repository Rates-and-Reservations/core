import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"

export const AuditLogIncludeSchema: z.ZodType<Prisma.AuditLogInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
}).strict()

export default AuditLogIncludeSchema;
