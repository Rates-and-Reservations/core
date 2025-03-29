import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnWhereInputSchema } from '../inputTypeSchemas/AddOnWhereInputSchema'
import { AddOnOrderByWithRelationInputSchema } from '../inputTypeSchemas/AddOnOrderByWithRelationInputSchema'
import { AddOnWhereUniqueInputSchema } from '../inputTypeSchemas/AddOnWhereUniqueInputSchema'

export const AddOnAggregateArgsSchema: z.ZodType<Prisma.AddOnAggregateArgs> = z.object({
  where: AddOnWhereInputSchema.optional(),
  orderBy: z.union([ AddOnOrderByWithRelationInputSchema.array(),AddOnOrderByWithRelationInputSchema ]).optional(),
  cursor: AddOnWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AddOnAggregateArgsSchema;
