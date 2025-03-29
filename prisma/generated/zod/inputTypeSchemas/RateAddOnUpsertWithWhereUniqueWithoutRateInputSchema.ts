import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';
import { RateAddOnUpdateWithoutRateInputSchema } from './RateAddOnUpdateWithoutRateInputSchema';
import { RateAddOnUncheckedUpdateWithoutRateInputSchema } from './RateAddOnUncheckedUpdateWithoutRateInputSchema';
import { RateAddOnCreateWithoutRateInputSchema } from './RateAddOnCreateWithoutRateInputSchema';
import { RateAddOnUncheckedCreateWithoutRateInputSchema } from './RateAddOnUncheckedCreateWithoutRateInputSchema';

export const RateAddOnUpsertWithWhereUniqueWithoutRateInputSchema: z.ZodType<Prisma.RateAddOnUpsertWithWhereUniqueWithoutRateInput> = z.object({
  where: z.lazy(() => RateAddOnWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RateAddOnUpdateWithoutRateInputSchema),z.lazy(() => RateAddOnUncheckedUpdateWithoutRateInputSchema) ]),
  create: z.union([ z.lazy(() => RateAddOnCreateWithoutRateInputSchema),z.lazy(() => RateAddOnUncheckedCreateWithoutRateInputSchema) ]),
}).strict();

export default RateAddOnUpsertWithWhereUniqueWithoutRateInputSchema;
