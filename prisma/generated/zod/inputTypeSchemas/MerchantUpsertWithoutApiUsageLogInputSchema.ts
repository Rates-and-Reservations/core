import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutApiUsageLogInputSchema } from './MerchantUpdateWithoutApiUsageLogInputSchema';
import { MerchantUncheckedUpdateWithoutApiUsageLogInputSchema } from './MerchantUncheckedUpdateWithoutApiUsageLogInputSchema';
import { MerchantCreateWithoutApiUsageLogInputSchema } from './MerchantCreateWithoutApiUsageLogInputSchema';
import { MerchantUncheckedCreateWithoutApiUsageLogInputSchema } from './MerchantUncheckedCreateWithoutApiUsageLogInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutApiUsageLogInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutApiUsageLogInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutApiUsageLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiUsageLogInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiUsageLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiUsageLogInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutApiUsageLogInputSchema;
