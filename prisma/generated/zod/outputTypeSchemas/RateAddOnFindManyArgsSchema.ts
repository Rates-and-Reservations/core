import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnIncludeSchema } from '../inputTypeSchemas/RateAddOnIncludeSchema'
import { RateAddOnWhereInputSchema } from '../inputTypeSchemas/RateAddOnWhereInputSchema'
import { RateAddOnOrderByWithRelationInputSchema } from '../inputTypeSchemas/RateAddOnOrderByWithRelationInputSchema'
import { RateAddOnWhereUniqueInputSchema } from '../inputTypeSchemas/RateAddOnWhereUniqueInputSchema'
import { RateAddOnScalarFieldEnumSchema } from '../inputTypeSchemas/RateAddOnScalarFieldEnumSchema'
import { RateArgsSchema } from "../outputTypeSchemas/RateArgsSchema"
import { AddOnArgsSchema } from "../outputTypeSchemas/AddOnArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RateAddOnSelectSchema: z.ZodType<Prisma.RateAddOnSelect> = z.object({
  id: z.boolean().optional(),
  rateId: z.boolean().optional(),
  addOnId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  rate: z.union([z.boolean(),z.lazy(() => RateArgsSchema)]).optional(),
  addOn: z.union([z.boolean(),z.lazy(() => AddOnArgsSchema)]).optional(),
}).strict()

export const RateAddOnFindManyArgsSchema: z.ZodType<Prisma.RateAddOnFindManyArgs> = z.object({
  select: RateAddOnSelectSchema.optional(),
  include: z.lazy(() => RateAddOnIncludeSchema).optional(),
  where: RateAddOnWhereInputSchema.optional(),
  orderBy: z.union([ RateAddOnOrderByWithRelationInputSchema.array(),RateAddOnOrderByWithRelationInputSchema ]).optional(),
  cursor: RateAddOnWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RateAddOnScalarFieldEnumSchema,RateAddOnScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RateAddOnFindManyArgsSchema;
