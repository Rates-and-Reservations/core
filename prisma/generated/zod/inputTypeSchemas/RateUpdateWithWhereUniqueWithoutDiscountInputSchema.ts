import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithoutDiscountInputSchema } from './RateUpdateWithoutDiscountInputSchema';
import { RateUncheckedUpdateWithoutDiscountInputSchema } from './RateUncheckedUpdateWithoutDiscountInputSchema';

export const RateUpdateWithWhereUniqueWithoutDiscountInputSchema: z.ZodType<Prisma.RateUpdateWithWhereUniqueWithoutDiscountInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RateUpdateWithoutDiscountInputSchema),z.lazy(() => RateUncheckedUpdateWithoutDiscountInputSchema) ]),
}).strict();

export default RateUpdateWithWhereUniqueWithoutDiscountInputSchema;
