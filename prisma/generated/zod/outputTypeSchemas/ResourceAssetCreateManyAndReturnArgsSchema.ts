import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceAssetCreateManyInputSchema } from '../inputTypeSchemas/ResourceAssetCreateManyInputSchema'

export const ResourceAssetCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ResourceAssetCreateManyAndReturnArgs> = z.object({
  data: z.union([ ResourceAssetCreateManyInputSchema,ResourceAssetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ResourceAssetCreateManyAndReturnArgsSchema;
