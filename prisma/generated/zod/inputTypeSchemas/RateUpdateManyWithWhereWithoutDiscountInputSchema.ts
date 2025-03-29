import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateScalarWhereInputSchema } from './RateScalarWhereInputSchema';
import { RateUpdateManyMutationInputSchema } from './RateUpdateManyMutationInputSchema';
import { RateUncheckedUpdateManyWithoutDiscountInputSchema } from './RateUncheckedUpdateManyWithoutDiscountInputSchema';

export const RateUpdateManyWithWhereWithoutDiscountInputSchema: z.ZodType<Prisma.RateUpdateManyWithWhereWithoutDiscountInput> = z.object({
  where: z.lazy(() => RateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RateUpdateManyMutationInputSchema),z.lazy(() => RateUncheckedUpdateManyWithoutDiscountInputSchema) ]),
}).strict();

export default RateUpdateManyWithWhereWithoutDiscountInputSchema;
