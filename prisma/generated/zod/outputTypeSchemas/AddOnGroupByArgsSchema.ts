import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddOnWhereInputSchema } from '../inputTypeSchemas/AddOnWhereInputSchema'
import { AddOnOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AddOnOrderByWithAggregationInputSchema'
import { AddOnScalarFieldEnumSchema } from '../inputTypeSchemas/AddOnScalarFieldEnumSchema'
import { AddOnScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AddOnScalarWhereWithAggregatesInputSchema'

export const AddOnGroupByArgsSchema: z.ZodType<Prisma.AddOnGroupByArgs> = z.object({
  where: AddOnWhereInputSchema.optional(),
  orderBy: z.union([ AddOnOrderByWithAggregationInputSchema.array(),AddOnOrderByWithAggregationInputSchema ]).optional(),
  by: AddOnScalarFieldEnumSchema.array(),
  having: AddOnScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AddOnGroupByArgsSchema;
