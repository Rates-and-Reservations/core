import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestCreateWithoutPaymentTransactionInputSchema } from './RefundRequestCreateWithoutPaymentTransactionInputSchema';
import { RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema } from './RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema';

export const RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundRequestCreateOrConnectWithoutPaymentTransactionInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema) ]),
}).strict();

export default RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema;
