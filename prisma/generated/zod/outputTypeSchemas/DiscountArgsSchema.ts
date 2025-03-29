import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountSelectSchema } from '../inputTypeSchemas/DiscountSelectSchema';
import { DiscountIncludeSchema } from '../inputTypeSchemas/DiscountIncludeSchema';

export const DiscountArgsSchema: z.ZodType<Prisma.DiscountDefaultArgs> = z.object({
  select: z.lazy(() => DiscountSelectSchema).optional(),
  include: z.lazy(() => DiscountIncludeSchema).optional(),
}).strict();

export default DiscountArgsSchema;
