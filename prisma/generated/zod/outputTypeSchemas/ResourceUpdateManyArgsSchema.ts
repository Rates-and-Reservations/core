import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceUpdateManyMutationInputSchema } from '../inputTypeSchemas/ResourceUpdateManyMutationInputSchema'
import { ResourceUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ResourceUncheckedUpdateManyInputSchema'
import { ResourceWhereInputSchema } from '../inputTypeSchemas/ResourceWhereInputSchema'

export const ResourceUpdateManyArgsSchema: z.ZodType<Prisma.ResourceUpdateManyArgs> = z.object({
  data: z.union([ ResourceUpdateManyMutationInputSchema,ResourceUncheckedUpdateManyInputSchema ]),
  where: ResourceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceUpdateManyArgsSchema;
