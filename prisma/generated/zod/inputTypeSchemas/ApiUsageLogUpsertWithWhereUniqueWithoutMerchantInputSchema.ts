import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';
import { ApiUsageLogUpdateWithoutMerchantInputSchema } from './ApiUsageLogUpdateWithoutMerchantInputSchema';
import { ApiUsageLogUncheckedUpdateWithoutMerchantInputSchema } from './ApiUsageLogUncheckedUpdateWithoutMerchantInputSchema';
import { ApiUsageLogCreateWithoutMerchantInputSchema } from './ApiUsageLogCreateWithoutMerchantInputSchema';
import { ApiUsageLogUncheckedCreateWithoutMerchantInputSchema } from './ApiUsageLogUncheckedCreateWithoutMerchantInputSchema';

export const ApiUsageLogUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageLogUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiUsageLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ApiUsageLogUpdateWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => ApiUsageLogCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiUsageLogUpsertWithWhereUniqueWithoutMerchantInputSchema;
