import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';
import { ApiUsageLogCreateWithoutMerchantInputSchema } from './ApiUsageLogCreateWithoutMerchantInputSchema';
import { ApiUsageLogUncheckedCreateWithoutMerchantInputSchema } from './ApiUsageLogUncheckedCreateWithoutMerchantInputSchema';

export const ApiUsageLogCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageLogCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiUsageLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApiUsageLogCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiUsageLogCreateOrConnectWithoutMerchantInputSchema;
