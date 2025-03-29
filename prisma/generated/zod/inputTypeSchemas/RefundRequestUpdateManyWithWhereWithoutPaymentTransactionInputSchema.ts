import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestScalarWhereInputSchema } from './RefundRequestScalarWhereInputSchema';
import { RefundRequestUpdateManyMutationInputSchema } from './RefundRequestUpdateManyMutationInputSchema';
import { RefundRequestUncheckedUpdateManyWithoutPaymentTransactionInputSchema } from './RefundRequestUncheckedUpdateManyWithoutPaymentTransactionInputSchema';

export const RefundRequestUpdateManyWithWhereWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundRequestUpdateManyWithWhereWithoutPaymentTransactionInput> = z.object({
  where: z.lazy(() => RefundRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RefundRequestUpdateManyMutationInputSchema),z.lazy(() => RefundRequestUncheckedUpdateManyWithoutPaymentTransactionInputSchema) ]),
}).strict();

export default RefundRequestUpdateManyWithWhereWithoutPaymentTransactionInputSchema;
