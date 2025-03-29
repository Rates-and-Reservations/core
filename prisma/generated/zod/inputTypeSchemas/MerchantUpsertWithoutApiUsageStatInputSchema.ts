import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutApiUsageStatInputSchema } from './MerchantUpdateWithoutApiUsageStatInputSchema';
import { MerchantUncheckedUpdateWithoutApiUsageStatInputSchema } from './MerchantUncheckedUpdateWithoutApiUsageStatInputSchema';
import { MerchantCreateWithoutApiUsageStatInputSchema } from './MerchantCreateWithoutApiUsageStatInputSchema';
import { MerchantUncheckedCreateWithoutApiUsageStatInputSchema } from './MerchantUncheckedCreateWithoutApiUsageStatInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutApiUsageStatInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutApiUsageStatInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutApiUsageStatInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiUsageStatInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiUsageStatInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiUsageStatInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutApiUsageStatInputSchema;
