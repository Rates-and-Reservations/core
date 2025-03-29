import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ResourceAssetUncheckedCreateWithoutAssetInputSchema: z.ZodType<Prisma.ResourceAssetUncheckedCreateWithoutAssetInput> = z.object({
  id: z.string().cuid().optional(),
  resourceId: z.string(),
  isPrimary: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ResourceAssetUncheckedCreateWithoutAssetInputSchema;
