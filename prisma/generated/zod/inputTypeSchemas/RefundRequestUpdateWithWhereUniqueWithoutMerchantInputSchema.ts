import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithoutMerchantInputSchema } from './RefundRequestUpdateWithoutMerchantInputSchema';
import { RefundRequestUncheckedUpdateWithoutMerchantInputSchema } from './RefundRequestUncheckedUpdateWithoutMerchantInputSchema';

export const RefundRequestUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.RefundRequestUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RefundRequestUpdateWithoutMerchantInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default RefundRequestUpdateWithWhereUniqueWithoutMerchantInputSchema;
