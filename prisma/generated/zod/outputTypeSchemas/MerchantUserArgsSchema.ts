import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserSelectSchema } from '../inputTypeSchemas/MerchantUserSelectSchema';
import { MerchantUserIncludeSchema } from '../inputTypeSchemas/MerchantUserIncludeSchema';

export const MerchantUserArgsSchema: z.ZodType<Prisma.MerchantUserDefaultArgs> = z.object({
  select: z.lazy(() => MerchantUserSelectSchema).optional(),
  include: z.lazy(() => MerchantUserIncludeSchema).optional(),
}).strict();

export default MerchantUserArgsSchema;
