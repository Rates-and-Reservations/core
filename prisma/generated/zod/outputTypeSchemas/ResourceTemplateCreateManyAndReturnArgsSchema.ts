import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateCreateManyInputSchema } from '../inputTypeSchemas/ResourceTemplateCreateManyInputSchema'

export const ResourceTemplateCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ResourceTemplateCreateManyAndReturnArgs> = z.object({
  data: z.union([ ResourceTemplateCreateManyInputSchema,ResourceTemplateCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ResourceTemplateCreateManyAndReturnArgsSchema;
