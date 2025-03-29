import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateCreateWithoutRateAddOnInputSchema } from './RateCreateWithoutRateAddOnInputSchema';
import { RateUncheckedCreateWithoutRateAddOnInputSchema } from './RateUncheckedCreateWithoutRateAddOnInputSchema';

export const RateCreateOrConnectWithoutRateAddOnInputSchema: z.ZodType<Prisma.RateCreateOrConnectWithoutRateAddOnInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RateCreateWithoutRateAddOnInputSchema),z.lazy(() => RateUncheckedCreateWithoutRateAddOnInputSchema) ]),
}).strict();

export default RateCreateOrConnectWithoutRateAddOnInputSchema;
