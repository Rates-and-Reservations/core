import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateSelectSchema } from '../inputTypeSchemas/RateSelectSchema';
import { RateIncludeSchema } from '../inputTypeSchemas/RateIncludeSchema';

export const RateArgsSchema: z.ZodType<Prisma.RateDefaultArgs> = z.object({
  select: z.lazy(() => RateSelectSchema).optional(),
  include: z.lazy(() => RateIncludeSchema).optional(),
}).strict();

export default RateArgsSchema;
