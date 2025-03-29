import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateNestedOneWithoutResourceAssetInputSchema } from './ResourceCreateNestedOneWithoutResourceAssetInputSchema';

export const ResourceAssetCreateWithoutAssetInputSchema: z.ZodType<Prisma.ResourceAssetCreateWithoutAssetInput> = z.object({
  id: z.string().cuid().optional(),
  isPrimary: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  resource: z.lazy(() => ResourceCreateNestedOneWithoutResourceAssetInputSchema)
}).strict();

export default ResourceAssetCreateWithoutAssetInputSchema;
