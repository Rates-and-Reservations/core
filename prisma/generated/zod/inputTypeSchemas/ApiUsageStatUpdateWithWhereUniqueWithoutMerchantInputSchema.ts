import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';
import { ApiUsageStatUpdateWithoutMerchantInputSchema } from './ApiUsageStatUpdateWithoutMerchantInputSchema';
import { ApiUsageStatUncheckedUpdateWithoutMerchantInputSchema } from './ApiUsageStatUncheckedUpdateWithoutMerchantInputSchema';

export const ApiUsageStatUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageStatUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiUsageStatWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ApiUsageStatUpdateWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiUsageStatUpdateWithWhereUniqueWithoutMerchantInputSchema;
