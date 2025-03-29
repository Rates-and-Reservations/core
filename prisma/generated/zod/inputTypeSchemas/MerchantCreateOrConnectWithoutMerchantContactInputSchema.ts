import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutMerchantContactInputSchema } from './MerchantCreateWithoutMerchantContactInputSchema';
import { MerchantUncheckedCreateWithoutMerchantContactInputSchema } from './MerchantUncheckedCreateWithoutMerchantContactInputSchema';

export const MerchantCreateOrConnectWithoutMerchantContactInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutMerchantContactInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantContactInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantContactInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutMerchantContactInputSchema;
