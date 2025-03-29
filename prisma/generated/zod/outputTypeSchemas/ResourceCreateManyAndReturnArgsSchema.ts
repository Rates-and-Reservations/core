import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceCreateManyInputSchema } from '../inputTypeSchemas/ResourceCreateManyInputSchema'

export const ResourceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ResourceCreateManyAndReturnArgs> = z.object({
  data: z.union([ ResourceCreateManyInputSchema,ResourceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default ResourceCreateManyAndReturnArgsSchema;
