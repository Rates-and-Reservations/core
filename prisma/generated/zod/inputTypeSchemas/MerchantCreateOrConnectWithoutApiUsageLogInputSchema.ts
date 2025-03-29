import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutApiUsageLogInputSchema } from './MerchantCreateWithoutApiUsageLogInputSchema';
import { MerchantUncheckedCreateWithoutApiUsageLogInputSchema } from './MerchantUncheckedCreateWithoutApiUsageLogInputSchema';

export const MerchantCreateOrConnectWithoutApiUsageLogInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutApiUsageLogInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiUsageLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiUsageLogInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutApiUsageLogInputSchema;
