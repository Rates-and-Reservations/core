import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateAddOnWhereUniqueInputSchema } from './RateAddOnWhereUniqueInputSchema';
import { RateAddOnCreateWithoutRateInputSchema } from './RateAddOnCreateWithoutRateInputSchema';
import { RateAddOnUncheckedCreateWithoutRateInputSchema } from './RateAddOnUncheckedCreateWithoutRateInputSchema';

export const RateAddOnCreateOrConnectWithoutRateInputSchema: z.ZodType<Prisma.RateAddOnCreateOrConnectWithoutRateInput> = z.object({
  where: z.lazy(() => RateAddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RateAddOnCreateWithoutRateInputSchema),z.lazy(() => RateAddOnUncheckedCreateWithoutRateInputSchema) ]),
}).strict();

export default RateAddOnCreateOrConnectWithoutRateInputSchema;
