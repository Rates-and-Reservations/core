import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnUpdateManyMutationInputSchema } from '../inputTypeSchemas/AddOnUpdateManyMutationInputSchema'
import { AddOnUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AddOnUncheckedUpdateManyInputSchema'
import { AddOnWhereInputSchema } from '../inputTypeSchemas/AddOnWhereInputSchema'

export const AddOnUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AddOnUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AddOnUpdateManyMutationInputSchema,AddOnUncheckedUpdateManyInputSchema ]),
  where: AddOnWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AddOnUpdateManyAndReturnArgsSchema;
