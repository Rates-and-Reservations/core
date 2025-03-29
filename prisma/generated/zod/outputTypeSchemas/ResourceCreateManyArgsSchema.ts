import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateManyInputSchema } from '../inputTypeSchemas/ResourceCreateManyInputSchema'

export const ResourceCreateManyArgsSchema: z.ZodType<Prisma.ResourceCreateManyArgs> = z.object({
  data: z.union([ ResourceCreateManyInputSchema,ResourceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ResourceCreateManyArgsSchema;
