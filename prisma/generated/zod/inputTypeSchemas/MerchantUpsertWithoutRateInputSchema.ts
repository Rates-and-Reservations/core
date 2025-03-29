import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutRateInputSchema } from './MerchantUpdateWithoutRateInputSchema';
import { MerchantUncheckedUpdateWithoutRateInputSchema } from './MerchantUncheckedUpdateWithoutRateInputSchema';
import { MerchantCreateWithoutRateInputSchema } from './MerchantCreateWithoutRateInputSchema';
import { MerchantUncheckedCreateWithoutRateInputSchema } from './MerchantUncheckedCreateWithoutRateInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutRateInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutRateInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutRateInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutRateInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutRateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutRateInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutRateInputSchema;
