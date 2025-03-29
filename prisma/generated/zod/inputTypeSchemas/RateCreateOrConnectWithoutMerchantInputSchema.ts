import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateWhereUniqueInputSchema } from './RateWhereUniqueInputSchema';
import { RateCreateWithoutMerchantInputSchema } from './RateCreateWithoutMerchantInputSchema';
import { RateUncheckedCreateWithoutMerchantInputSchema } from './RateUncheckedCreateWithoutMerchantInputSchema';

export const RateCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.RateCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => RateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RateCreateWithoutMerchantInputSchema),z.lazy(() => RateUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default RateCreateOrConnectWithoutMerchantInputSchema;
