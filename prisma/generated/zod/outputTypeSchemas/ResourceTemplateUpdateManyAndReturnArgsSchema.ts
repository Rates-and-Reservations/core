import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateUpdateManyMutationInputSchema } from '../inputTypeSchemas/ResourceTemplateUpdateManyMutationInputSchema'
import { ResourceTemplateUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ResourceTemplateUncheckedUpdateManyInputSchema'
import { ResourceTemplateWhereInputSchema } from '../inputTypeSchemas/ResourceTemplateWhereInputSchema'

export const ResourceTemplateUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ResourceTemplateUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ResourceTemplateUpdateManyMutationInputSchema,ResourceTemplateUncheckedUpdateManyInputSchema ]),
  where: ResourceTemplateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceTemplateUpdateManyAndReturnArgsSchema;
