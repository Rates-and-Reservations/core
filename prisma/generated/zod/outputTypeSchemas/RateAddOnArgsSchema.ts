import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateAddOnSelectSchema } from '../inputTypeSchemas/RateAddOnSelectSchema';
import { RateAddOnIncludeSchema } from '../inputTypeSchemas/RateAddOnIncludeSchema';

export const RateAddOnArgsSchema: z.ZodType<Prisma.RateAddOnDefaultArgs> = z.object({
  select: z.lazy(() => RateAddOnSelectSchema).optional(),
  include: z.lazy(() => RateAddOnIncludeSchema).optional(),
}).strict();

export default RateAddOnArgsSchema;
