import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DiscountCountOutputTypeSelectSchema } from './DiscountCountOutputTypeSelectSchema';

export const DiscountCountOutputTypeArgsSchema: z.ZodType<Prisma.DiscountCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => DiscountCountOutputTypeSelectSchema).nullish(),
}).strict();

export default DiscountCountOutputTypeSelectSchema;
