import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutApiUsageStatInputSchema } from './MerchantCreateWithoutApiUsageStatInputSchema';
import { MerchantUncheckedCreateWithoutApiUsageStatInputSchema } from './MerchantUncheckedCreateWithoutApiUsageStatInputSchema';

export const MerchantCreateOrConnectWithoutApiUsageStatInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutApiUsageStatInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiUsageStatInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiUsageStatInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutApiUsageStatInputSchema;
