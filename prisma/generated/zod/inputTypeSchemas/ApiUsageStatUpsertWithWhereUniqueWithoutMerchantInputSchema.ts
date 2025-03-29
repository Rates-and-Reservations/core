import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';
import { ApiUsageStatUpdateWithoutMerchantInputSchema } from './ApiUsageStatUpdateWithoutMerchantInputSchema';
import { ApiUsageStatUncheckedUpdateWithoutMerchantInputSchema } from './ApiUsageStatUncheckedUpdateWithoutMerchantInputSchema';
import { ApiUsageStatCreateWithoutMerchantInputSchema } from './ApiUsageStatCreateWithoutMerchantInputSchema';
import { ApiUsageStatUncheckedCreateWithoutMerchantInputSchema } from './ApiUsageStatUncheckedCreateWithoutMerchantInputSchema';

export const ApiUsageStatUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageStatUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiUsageStatWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ApiUsageStatUpdateWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => ApiUsageStatCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiUsageStatUpsertWithWhereUniqueWithoutMerchantInputSchema;
