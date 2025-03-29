import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateSelectSchema } from '../inputTypeSchemas/ResourceTemplateSelectSchema';
import { ResourceTemplateIncludeSchema } from '../inputTypeSchemas/ResourceTemplateIncludeSchema';

export const ResourceTemplateArgsSchema: z.ZodType<Prisma.ResourceTemplateDefaultArgs> = z.object({
  select: z.lazy(() => ResourceTemplateSelectSchema).optional(),
  include: z.lazy(() => ResourceTemplateIncludeSchema).optional(),
}).strict();

export default ResourceTemplateArgsSchema;
