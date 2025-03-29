import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutRateInputSchema } from './MerchantUpdateWithoutRateInputSchema';
import { MerchantUncheckedUpdateWithoutRateInputSchema } from './MerchantUncheckedUpdateWithoutRateInputSchema';

export const MerchantUpdateToOneWithWhereWithoutRateInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutRateInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutRateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutRateInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutRateInputSchema;
