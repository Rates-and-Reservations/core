import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const MerchantAssetCreateManyMerchantInputSchema: z.ZodType<Prisma.MerchantAssetCreateManyMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  type: z.string(),
  url: z.string(),
  publicId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default MerchantAssetCreateManyMerchantInputSchema;
