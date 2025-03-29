import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetSelectSchema } from '../inputTypeSchemas/ResourceAssetSelectSchema';
import { ResourceAssetIncludeSchema } from '../inputTypeSchemas/ResourceAssetIncludeSchema';

export const ResourceAssetArgsSchema: z.ZodType<Prisma.ResourceAssetDefaultArgs> = z.object({
  select: z.lazy(() => ResourceAssetSelectSchema).optional(),
  include: z.lazy(() => ResourceAssetIncludeSchema).optional(),
}).strict();

export default ResourceAssetArgsSchema;
