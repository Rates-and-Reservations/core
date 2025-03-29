import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithoutPaymentTransactionInputSchema } from './RefundRequestUpdateWithoutPaymentTransactionInputSchema';
import { RefundRequestUncheckedUpdateWithoutPaymentTransactionInputSchema } from './RefundRequestUncheckedUpdateWithoutPaymentTransactionInputSchema';

export const RefundRequestUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundRequestUpdateWithWhereUniqueWithoutPaymentTransactionInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RefundRequestUpdateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutPaymentTransactionInputSchema) ]),
}).strict();

export default RefundRequestUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema;
