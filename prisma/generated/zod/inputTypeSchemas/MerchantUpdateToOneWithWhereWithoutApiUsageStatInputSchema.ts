import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutApiUsageStatInputSchema } from './MerchantUpdateWithoutApiUsageStatInputSchema';
import { MerchantUncheckedUpdateWithoutApiUsageStatInputSchema } from './MerchantUncheckedUpdateWithoutApiUsageStatInputSchema';

export const MerchantUpdateToOneWithWhereWithoutApiUsageStatInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutApiUsageStatInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutApiUsageStatInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiUsageStatInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutApiUsageStatInputSchema;
