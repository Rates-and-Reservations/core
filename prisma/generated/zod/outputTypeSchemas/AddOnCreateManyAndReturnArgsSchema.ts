import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnCreateManyInputSchema } from '../inputTypeSchemas/AddOnCreateManyInputSchema'

export const AddOnCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AddOnCreateManyAndReturnArgs> = z.object({
  data: z.union([ AddOnCreateManyInputSchema,AddOnCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default AddOnCreateManyAndReturnArgsSchema;
