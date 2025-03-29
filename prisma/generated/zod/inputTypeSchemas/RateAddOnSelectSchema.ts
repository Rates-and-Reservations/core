import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateArgsSchema } from "../outputTypeSchemas/RateArgsSchema"
import { AddOnArgsSchema } from "../outputTypeSchemas/AddOnArgsSchema"

export const RateAddOnSelectSchema: z.ZodType<Prisma.RateAddOnSelect> = z.object({
  id: z.boolean().optional(),
  rateId: z.boolean().optional(),
  addOnId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  rate: z.union([z.boolean(),z.lazy(() => RateArgsSchema)]).optional(),
  addOn: z.union([z.boolean(),z.lazy(() => AddOnArgsSchema)]).optional(),
}).strict()

export default RateAddOnSelectSchema;
