import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';
import { ApiUsageLogUpdateWithoutMerchantInputSchema } from './ApiUsageLogUpdateWithoutMerchantInputSchema';
import { ApiUsageLogUncheckedUpdateWithoutMerchantInputSchema } from './ApiUsageLogUncheckedUpdateWithoutMerchantInputSchema';

export const ApiUsageLogUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageLogUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiUsageLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ApiUsageLogUpdateWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiUsageLogUpdateWithWhereUniqueWithoutMerchantInputSchema;
