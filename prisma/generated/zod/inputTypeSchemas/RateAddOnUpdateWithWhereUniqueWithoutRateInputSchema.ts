import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';
import { RateAddOnUpdateWithoutRateInputSchema } from './RateAddOnUpdateWithoutRateInputSchema';
import { RateAddOnUncheckedUpdateWithoutRateInputSchema } from './RateAddOnUncheckedUpdateWithoutRateInputSchema';

export const RateAddOnUpdateWithWhereUniqueWithoutRateInputSchema: z.ZodType<Prisma.RateAddOnUpdateWithWhereUniqueWithoutRateInput> = z.object({
  where: z.lazy(() => RateAddOnWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RateAddOnUpdateWithoutRateInputSchema),z.lazy(() => RateAddOnUncheckedUpdateWithoutRateInputSchema) ]),
}).strict();

export default RateAddOnUpdateWithWhereUniqueWithoutRateInputSchema;
