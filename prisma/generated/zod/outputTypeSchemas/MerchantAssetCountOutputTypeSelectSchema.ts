import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const MerchantAssetCountOutputTypeSelectSchema: z.ZodType<Prisma.MerchantAssetCountOutputTypeSelect> = z.object({
  ResourceAsset: z.boolean().optional(),
}).strict();

export default MerchantAssetCountOutputTypeSelectSchema;
