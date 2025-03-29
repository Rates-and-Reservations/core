import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ResourceAssetUncheckedCreateWithoutResourceInputSchema: z.ZodType<Prisma.ResourceAssetUncheckedCreateWithoutResourceInput> = z.object({
  id: z.string().cuid().optional(),
  assetId: z.string(),
  isPrimary: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ResourceAssetUncheckedCreateWithoutResourceInputSchema;
