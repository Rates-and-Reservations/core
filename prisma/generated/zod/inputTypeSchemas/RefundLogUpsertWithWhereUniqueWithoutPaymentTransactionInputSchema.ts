import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';
import { RefundLogUpdateWithoutPaymentTransactionInputSchema } from './RefundLogUpdateWithoutPaymentTransactionInputSchema';
import { RefundLogUncheckedUpdateWithoutPaymentTransactionInputSchema } from './RefundLogUncheckedUpdateWithoutPaymentTransactionInputSchema';
import { RefundLogCreateWithoutPaymentTransactionInputSchema } from './RefundLogCreateWithoutPaymentTransactionInputSchema';
import { RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema } from './RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema';

export const RefundLogUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundLogUpsertWithWhereUniqueWithoutPaymentTransactionInput> = z.object({
  where: z.lazy(() => RefundLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RefundLogUpdateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUncheckedUpdateWithoutPaymentTransactionInputSchema) ]),
  create: z.union([ z.lazy(() => RefundLogCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema) ]),
}).strict();

export default RefundLogUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema;
