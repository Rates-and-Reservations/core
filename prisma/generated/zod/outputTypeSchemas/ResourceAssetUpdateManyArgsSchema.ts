import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetUpdateManyMutationInputSchema } from '../inputTypeSchemas/ResourceAssetUpdateManyMutationInputSchema'
import { ResourceAssetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ResourceAssetUncheckedUpdateManyInputSchema'
import { ResourceAssetWhereInputSchema } from '../inputTypeSchemas/ResourceAssetWhereInputSchema'

export const ResourceAssetUpdateManyArgsSchema: z.ZodType<Prisma.ResourceAssetUpdateManyArgs> = z.object({
  data: z.union([ ResourceAssetUpdateManyMutationInputSchema,ResourceAssetUncheckedUpdateManyInputSchema ]),
  where: ResourceAssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceAssetUpdateManyArgsSchema;
