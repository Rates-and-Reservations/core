import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetCreateNestedOneWithoutResourceAssetInputSchema } from './MerchantAssetCreateNestedOneWithoutResourceAssetInputSchema';

export const ResourceAssetCreateWithoutResourceInputSchema: z.ZodType<Prisma.ResourceAssetCreateWithoutResourceInput> = z.object({
  id: z.string().cuid().optional(),
  isPrimary: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  asset: z.lazy(() => MerchantAssetCreateNestedOneWithoutResourceAssetInputSchema)
}).strict();

export default ResourceAssetCreateWithoutResourceInputSchema;
