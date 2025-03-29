import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"

export const MerchantUserIncludeSchema: z.ZodType<Prisma.MerchantUserInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
}).strict()

export default MerchantUserIncludeSchema;
