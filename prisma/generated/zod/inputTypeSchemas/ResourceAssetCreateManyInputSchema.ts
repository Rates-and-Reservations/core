import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ResourceAssetCreateManyInputSchema: z.ZodType<Prisma.ResourceAssetCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  resourceId: z.string(),
  assetId: z.string(),
  isPrimary: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ResourceAssetCreateManyInputSchema;
