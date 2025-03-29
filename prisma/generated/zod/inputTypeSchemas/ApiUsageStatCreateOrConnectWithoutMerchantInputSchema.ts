import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';
import { ApiUsageStatCreateWithoutMerchantInputSchema } from './ApiUsageStatCreateWithoutMerchantInputSchema';
import { ApiUsageStatUncheckedCreateWithoutMerchantInputSchema } from './ApiUsageStatUncheckedCreateWithoutMerchantInputSchema';

export const ApiUsageStatCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageStatCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiUsageStatWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApiUsageStatCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiUsageStatCreateOrConnectWithoutMerchantInputSchema;
