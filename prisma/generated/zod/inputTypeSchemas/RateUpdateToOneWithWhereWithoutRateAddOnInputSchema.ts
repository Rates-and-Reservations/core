import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereInputSchema } from './RateWhereInputSchema';
import { RateUpdateWithoutRateAddOnInputSchema } from './RateUpdateWithoutRateAddOnInputSchema';
import { RateUncheckedUpdateWithoutRateAddOnInputSchema } from './RateUncheckedUpdateWithoutRateAddOnInputSchema';

export const RateUpdateToOneWithWhereWithoutRateAddOnInputSchema: z.ZodType<Prisma.RateUpdateToOneWithWhereWithoutRateAddOnInput> = z.object({
  where: z.lazy(() => RateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RateUpdateWithoutRateAddOnInputSchema),z.lazy(() => RateUncheckedUpdateWithoutRateAddOnInputSchema) ]),
}).strict();

export default RateUpdateToOneWithWhereWithoutRateAddOnInputSchema;
