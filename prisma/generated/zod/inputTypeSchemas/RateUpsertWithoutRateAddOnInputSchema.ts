import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateUpdateWithoutRateAddOnInputSchema } from './RateUpdateWithoutRateAddOnInputSchema';
import { RateUncheckedUpdateWithoutRateAddOnInputSchema } from './RateUncheckedUpdateWithoutRateAddOnInputSchema';
import { RateCreateWithoutRateAddOnInputSchema } from './RateCreateWithoutRateAddOnInputSchema';
import { RateUncheckedCreateWithoutRateAddOnInputSchema } from './RateUncheckedCreateWithoutRateAddOnInputSchema';
import { RateWhereInputSchema } from './RateWhereInputSchema';

export const RateUpsertWithoutRateAddOnInputSchema: z.ZodType<Prisma.RateUpsertWithoutRateAddOnInput> = z.object({
  update: z.union([ z.lazy(() => RateUpdateWithoutRateAddOnInputSchema),z.lazy(() => RateUncheckedUpdateWithoutRateAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => RateCreateWithoutRateAddOnInputSchema),z.lazy(() => RateUncheckedCreateWithoutRateAddOnInputSchema) ]),
  where: z.lazy(() => RateWhereInputSchema).optional()
}).strict();

export default RateUpsertWithoutRateAddOnInputSchema;
