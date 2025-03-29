import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateWhereInputSchema } from '../inputTypeSchemas/ResourceTemplateWhereInputSchema'

export const ResourceTemplateDeleteManyArgsSchema: z.ZodType<Prisma.ResourceTemplateDeleteManyArgs> = z.object({
  where: ResourceTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceTemplateDeleteManyArgsSchema;
