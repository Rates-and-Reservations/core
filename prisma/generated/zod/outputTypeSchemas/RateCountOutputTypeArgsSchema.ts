import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RateCountOutputTypeSelectSchema } from './RateCountOutputTypeSelectSchema';

export const RateCountOutputTypeArgsSchema: z.ZodType<Prisma.RateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default RateCountOutputTypeSelectSchema;
