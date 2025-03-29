import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnWhereInputSchema } from '../inputTypeSchemas/AddOnWhereInputSchema'

export const AddOnDeleteManyArgsSchema: z.ZodType<Prisma.AddOnDeleteManyArgs> = z.object({
  where: AddOnWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AddOnDeleteManyArgsSchema;
