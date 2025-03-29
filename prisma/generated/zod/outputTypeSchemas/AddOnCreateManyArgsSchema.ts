import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnCreateManyInputSchema } from '../inputTypeSchemas/AddOnCreateManyInputSchema'

export const AddOnCreateManyArgsSchema: z.ZodType<Prisma.AddOnCreateManyArgs> = z.object({
  data: z.union([ AddOnCreateManyInputSchema,AddOnCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AddOnCreateManyArgsSchema;
