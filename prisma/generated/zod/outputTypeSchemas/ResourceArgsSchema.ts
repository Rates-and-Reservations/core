import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceSelectSchema } from '../inputTypeSchemas/ResourceSelectSchema';
import { ResourceIncludeSchema } from '../inputTypeSchemas/ResourceIncludeSchema';

export const ResourceArgsSchema: z.ZodType<Prisma.ResourceDefaultArgs> = z.object({
  select: z.lazy(() => ResourceSelectSchema).optional(),
  include: z.lazy(() => ResourceIncludeSchema).optional(),
}).strict();

export default ResourceArgsSchema;
