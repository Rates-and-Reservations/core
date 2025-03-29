import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateCreateManyInputSchema } from '../inputTypeSchemas/ResourceTemplateCreateManyInputSchema'

export const ResourceTemplateCreateManyArgsSchema: z.ZodType<Prisma.ResourceTemplateCreateManyArgs> = z.object({
  data: z.union([ ResourceTemplateCreateManyInputSchema,ResourceTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ResourceTemplateCreateManyArgsSchema;
