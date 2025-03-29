import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithoutMerchantInputSchema } from './RateUpdateWithoutMerchantInputSchema';
import { RateUncheckedUpdateWithoutMerchantInputSchema } from './RateUncheckedUpdateWithoutMerchantInputSchema';

export const RateUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.RateUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RateUpdateWithoutMerchantInputSchema),z.lazy(() => RateUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default RateUpdateWithWhereUniqueWithoutMerchantInputSchema;
