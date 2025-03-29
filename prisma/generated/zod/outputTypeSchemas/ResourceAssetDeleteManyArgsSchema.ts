import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetWhereInputSchema } from '../inputTypeSchemas/ResourceAssetWhereInputSchema'

export const ResourceAssetDeleteManyArgsSchema: z.ZodType<Prisma.ResourceAssetDeleteManyArgs> = z.object({
  where: ResourceAssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceAssetDeleteManyArgsSchema;
