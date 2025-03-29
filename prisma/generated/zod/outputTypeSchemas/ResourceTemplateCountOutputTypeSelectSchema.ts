import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ResourceTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.ResourceTemplateCountOutputTypeSelect> = z.object({
  Resource: z.boolean().optional(),
}).strict();

export default ResourceTemplateCountOutputTypeSelectSchema;
