import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetUpdateManyMutationInputSchema } from '../inputTypeSchemas/ResourceAssetUpdateManyMutationInputSchema'
import { ResourceAssetUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ResourceAssetUncheckedUpdateManyInputSchema'
import { ResourceAssetWhereInputSchema } from '../inputTypeSchemas/ResourceAssetWhereInputSchema'

export const ResourceAssetUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ResourceAssetUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ResourceAssetUpdateManyMutationInputSchema,ResourceAssetUncheckedUpdateManyInputSchema ]),
  where: ResourceAssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceAssetUpdateManyAndReturnArgsSchema;
