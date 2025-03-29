import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithoutPaymentTransactionInputSchema } from './RefundRequestUpdateWithoutPaymentTransactionInputSchema';
import { RefundRequestUncheckedUpdateWithoutPaymentTransactionInputSchema } from './RefundRequestUncheckedUpdateWithoutPaymentTransactionInputSchema';
import { RefundRequestCreateWithoutPaymentTransactionInputSchema } from './RefundRequestCreateWithoutPaymentTransactionInputSchema';
import { RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema } from './RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema';

export const RefundRequestUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundRequestUpsertWithWhereUniqueWithoutPaymentTransactionInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RefundRequestUpdateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutPaymentTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema) ]),
}).strict();

export default RefundRequestUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema;
