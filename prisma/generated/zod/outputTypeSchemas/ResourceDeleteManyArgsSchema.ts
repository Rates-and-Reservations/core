import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceWhereInputSchema } from '../inputTypeSchemas/ResourceWhereInputSchema'

export const ResourceDeleteManyArgsSchema: z.ZodType<Prisma.ResourceDeleteManyArgs> = z.object({
  where: ResourceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default ResourceDeleteManyArgsSchema;
