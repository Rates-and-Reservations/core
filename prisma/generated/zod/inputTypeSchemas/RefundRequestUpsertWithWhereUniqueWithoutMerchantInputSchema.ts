import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithoutMerchantInputSchema } from './RefundRequestUpdateWithoutMerchantInputSchema';
import { RefundRequestUncheckedUpdateWithoutMerchantInputSchema } from './RefundRequestUncheckedUpdateWithoutMerchantInputSchema';
import { RefundRequestCreateWithoutMerchantInputSchema } from './RefundRequestCreateWithoutMerchantInputSchema';
import { RefundRequestUncheckedCreateWithoutMerchantInputSchema } from './RefundRequestUncheckedCreateWithoutMerchantInputSchema';

export const RefundRequestUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.RefundRequestUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RefundRequestUpdateWithoutMerchantInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutMerchantInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default RefundRequestUpsertWithWhereUniqueWithoutMerchantInputSchema;
