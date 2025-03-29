import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutMerchantUserInputSchema } from './MerchantCreateWithoutMerchantUserInputSchema';
import { MerchantUncheckedCreateWithoutMerchantUserInputSchema } from './MerchantUncheckedCreateWithoutMerchantUserInputSchema';

export const MerchantCreateOrConnectWithoutMerchantUserInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutMerchantUserInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantUserInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantUserInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutMerchantUserInputSchema;
