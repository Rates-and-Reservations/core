import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutApiUsageLogInputSchema } from './MerchantUpdateWithoutApiUsageLogInputSchema';
import { MerchantUncheckedUpdateWithoutApiUsageLogInputSchema } from './MerchantUncheckedUpdateWithoutApiUsageLogInputSchema';

export const MerchantUpdateToOneWithWhereWithoutApiUsageLogInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutApiUsageLogInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutApiUsageLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiUsageLogInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutApiUsageLogInputSchema;
