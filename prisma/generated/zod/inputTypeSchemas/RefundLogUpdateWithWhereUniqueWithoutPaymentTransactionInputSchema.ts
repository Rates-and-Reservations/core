import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';
import { RefundLogUpdateWithoutPaymentTransactionInputSchema } from './RefundLogUpdateWithoutPaymentTransactionInputSchema';
import { RefundLogUncheckedUpdateWithoutPaymentTransactionInputSchema } from './RefundLogUncheckedUpdateWithoutPaymentTransactionInputSchema';

export const RefundLogUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundLogUpdateWithWhereUniqueWithoutPaymentTransactionInput> = z.object({
  where: z.lazy(() => RefundLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RefundLogUpdateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUncheckedUpdateWithoutPaymentTransactionInputSchema) ]),
}).strict();

export default RefundLogUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema;
