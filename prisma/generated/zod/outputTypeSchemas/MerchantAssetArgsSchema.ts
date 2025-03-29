import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetSelectSchema } from '../inputTypeSchemas/MerchantAssetSelectSchema';
import { MerchantAssetIncludeSchema } from '../inputTypeSchemas/MerchantAssetIncludeSchema';

export const MerchantAssetArgsSchema: z.ZodType<Prisma.MerchantAssetDefaultArgs> = z.object({
  select: z.lazy(() => MerchantAssetSelectSchema).optional(),
  include: z.lazy(() => MerchantAssetIncludeSchema).optional(),
}).strict();

export default MerchantAssetArgsSchema;
