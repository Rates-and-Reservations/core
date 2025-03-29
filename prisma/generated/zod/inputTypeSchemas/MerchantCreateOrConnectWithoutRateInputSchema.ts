import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutRateInputSchema } from './MerchantCreateWithoutRateInputSchema';
import { MerchantUncheckedCreateWithoutRateInputSchema } from './MerchantUncheckedCreateWithoutRateInputSchema';

export const MerchantCreateOrConnectWithoutRateInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutRateInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutRateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutRateInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutRateInputSchema;
