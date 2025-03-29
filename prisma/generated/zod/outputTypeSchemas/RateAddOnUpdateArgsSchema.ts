import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnIncludeSchema } from '../inputTypeSchemas/RateAddOnIncludeSchema'
import { RateAddOnUpdateInputSchema } from '../inputTypeSchemas/RateAddOnUpdateInputSchema'
import { RateAddOnUncheckedUpdateInputSchema } from '../inputTypeSchemas/RateAddOnUncheckedUpdateInputSchema'
import { RateAddOnWhereUniqueInputSchema } from '../inputTypeSchemas/RateAddOnWhereUniqueInputSchema'
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

export const RateAddOnUpdateArgsSchema: z.ZodType<Prisma.RateAddOnUpdateArgs> = z.object({
  select: RateAddOnSelectSchema.optional(),
  include: z.lazy(() => RateAddOnIncludeSchema).optional(),
  data: z.union([ RateAddOnUpdateInputSchema,RateAddOnUncheckedUpdateInputSchema ]),
  where: RateAddOnWhereUniqueInputSchema,
}).strict() ;

export default RateAddOnUpdateArgsSchema;
