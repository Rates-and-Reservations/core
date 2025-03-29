import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';
import { RefundLogCreateWithoutPaymentTransactionInputSchema } from './RefundLogCreateWithoutPaymentTransactionInputSchema';
import { RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema } from './RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema';

export const RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundLogCreateOrConnectWithoutPaymentTransactionInput> = z.object({
  where: z.lazy(() => RefundLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RefundLogCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema) ]),
}).strict();

export default RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema;
