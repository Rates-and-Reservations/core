import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnScalarWhereInputSchema } from './RateAddOnScalarWhereInputSchema';
import { RateAddOnUpdateManyMutationInputSchema } from './RateAddOnUpdateManyMutationInputSchema';
import { RateAddOnUncheckedUpdateManyWithoutRateInputSchema } from './RateAddOnUncheckedUpdateManyWithoutRateInputSchema';

export const RateAddOnUpdateManyWithWhereWithoutRateInputSchema: z.ZodType<Prisma.RateAddOnUpdateManyWithWhereWithoutRateInput> = z.object({
  where: z.lazy(() => RateAddOnScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RateAddOnUpdateManyMutationInputSchema),z.lazy(() => RateAddOnUncheckedUpdateManyWithoutRateInputSchema) ]),
}).strict();

export default RateAddOnUpdateManyWithWhereWithoutRateInputSchema;
