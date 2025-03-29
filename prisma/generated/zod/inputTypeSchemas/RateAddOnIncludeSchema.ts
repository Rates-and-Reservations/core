import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateArgsSchema } from "../outputTypeSchemas/RateArgsSchema"
import { AddOnArgsSchema } from "../outputTypeSchemas/AddOnArgsSchema"

export const RateAddOnIncludeSchema: z.ZodType<Prisma.RateAddOnInclude> = z.object({
  rate: z.union([z.boolean(),z.lazy(() => RateArgsSchema)]).optional(),
  addOn: z.union([z.boolean(),z.lazy(() => AddOnArgsSchema)]).optional(),
}).strict()

export default RateAddOnIncludeSchema;
