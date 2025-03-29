import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateUpdateWithoutMerchantInputSchema } from './RateUpdateWithoutMerchantInputSchema';
import { RateUncheckedUpdateWithoutMerchantInputSchema } from './RateUncheckedUpdateWithoutMerchantInputSchema';
import { RateCreateWithoutMerchantInputSchema } from './RateCreateWithoutMerchantInputSchema';
import { RateUncheckedCreateWithoutMerchantInputSchema } from './RateUncheckedCreateWithoutMerchantInputSchema';

export const RateUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.RateUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RateUpdateWithoutMerchantInputSchema),z.lazy(() => RateUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => RateCreateWithoutMerchantInputSchema),z.lazy(() => RateUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default RateUpsertWithWhereUniqueWithoutMerchantInputSchema;
