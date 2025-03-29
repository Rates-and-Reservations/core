import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateCountOutputTypeSelectSchema } from './ResourceTemplateCountOutputTypeSelectSchema';

export const ResourceTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.ResourceTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ResourceTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ResourceTemplateCountOutputTypeSelectSchema;
